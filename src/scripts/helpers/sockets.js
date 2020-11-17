// FOR START SHOULD CALL Socket.connect();
import {BASE_DOMAIN} from '../api/api'

var Socket = {
  settings: {
    url: null,
    channel: "LiveChannel",
    reconnectTime: 1500,
  },

  isConnected: false,
  connection: null,
  reconnectTimer: null,
  stream_id: null,
  needReconnect: true,

  connect: function () {
    if(!Socket.settings.url){
      Socket.settings.url = `wss://${BASE_DOMAIN}:3334/cable`
    }

    this.connection = new WebSocket(Socket.settings.url)
    this.callbacks()
  },

  subscribe: function (channel) {
    this.connection.send(JSON.stringify({
      command: "subscribe",
      identifier: JSON.stringify({channel: channel, stream_id: this.stream_id}),
    }))
  },

  setChannel(streamId){
    this.settings.channel = `live-${streamId}`
  },

  setStreamId(newStreamId) {
    this.stream_id = newStreamId
  },

  reconnect: function () {
    var self = this
    clearTimeout(self.reconnectTimer)

    self.reconnectTimer = setTimeout(function () {
      // console.log("Socket is trying reconnect")
      Socket.connect(Socket.settings.url)
    }, Socket.settings.reconnectTime)
  },

  updateSocketUrl(newUrl) {
    this.needReconnect = false
    this.connection.close()
    this.needReconnect = true

    this.settings.url = newUrl

    this.connect()
  },

  callbacks: function () {
    var self = this

    self.connection.onclose = function () {
      Socket.isConnected = false
      // console.log("Socket is close")
      if (this.needReconnect) {
        self.reconnect()
      }
    }

    self.connection.onerror = function () {
      self.error()
    }

    self.connection.onmessage = function (e) {
      self.message(e)
    }

    self.connection.onopen = function (e) {
      self.open()
    }

    // CLOSE SOCKET IF USER CLOSE PAGE
    window.onbeforeunload = function () {
      if (self.connection) {
        self.connection.close()
      }
    }
  },

  open: function () {
    // console.log("Socket is open")
  },

  error: function () {
    // console.log("Socket error")
  },

  message: function (e) {
    this.proccessData(e)
  },

  proccessData: function (data) {
    data = JSON.parse(data.data)

    switch (data.type) {
      case "welcome":
        // console.log("Socket welcome")
        Socket.subscribe(Socket.settings.channel)
        return
      case "confirm_subscription":
        // console.log("Socket is confirm")
        Socket.isConnected = true
        return
      case "ping":
        // console.log("Socket ping")
        return
    }

    console.log(data)

    if (data.message) {
      const {event, ...anyData} = data.message
      this.fire(event, anyData)
    }
  },
  events: {},
  on(event_name, cb) {
    let current_data = this.events[event_name]

    if (!current_data) {
      current_data = []
    }

    current_data.push(cb)

    this.events[event_name] = current_data
  },
  off(event_name, cb) {
    let current_data = this.events[event_name]

    if (current_data) {
      for (let i = 0; i < current_data.length; i++) {
        if (current_data[i] === cb) {
          current_data.splice(i, 1)
        }
      }
    }

    this.events[event_name] = current_data
  },
  fire(event_name, data) {
    let current_data = this.events[event_name]

    if (!current_data) return

    for (let i = 0; i < current_data.length; i++) {
      current_data[i](data)
    }
  },
}

export default Socket

/*
event: comment_add (прилетать будет обьект type comment, действие — добавить в фид)
event: message_add (прилетать будет обьект type message, действие — добавить в фид нужному юзеру) передаваться будет с sign_token вместе, чтобы ты понял для кого оно
event: comment_destroy id: ID
event: message_destroy, message_id, sign_token

event: thesis_status (прилетать будет thesis_id: ID действие — обновить статус тезиса в ходе выступления)
event: speech_status (прилетать будет speeh_id: ID действие — обновить статус выступления в расписании)
event: reinitialize (прилетает сразу со всем массивом данных с инит запроса, действие — обновить все)


comment_add (comment)
message_add (message, sign_token)

comment_destroy (comment_id)
message_destroy (message_id, sign_token)
comment_update (comment_id, comment)
message_update (message_id, message, sign_token)
* */
