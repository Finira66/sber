import axios from 'axios'

import {allValueRequired} from '../helpers/requests'
import store from '../store/index'

export const BASE_DOMAIN = ''
export const BASE_URL = `https://${BASE_DOMAIN}`
export const BASE_API_URL = `${BASE_URL}/api/out`
const GET_INITIAL_VIDEO = `${BASE_API_URL}/videos/get_video`
const ACCEPT_VIDEO = `${BASE_API_URL}/videos/accept`
const CANCEL_VIDEO = `${BASE_API_URL}/videos/cancel`


const EVENT_URL = stream_id => `${BASE_API_URL}/streams/${stream_id}`
const LOGIN_URL = `${BASE_API_URL}/users/signin`
const SEND_MESSAGE_URL = stream_id =>
  `${BASE_API_URL}/streams/${stream_id}/messages`
const GET_MESSAGE_URL = (stream_id, message_id) =>
  `${BASE_API_URL}/streams/${stream_id}/messages/${message_id}`
const SEND_VOTE_ANSWER_URL = (stream_id, comment_id) =>
  `${BASE_API_URL}/streams/${stream_id}/comments/${comment_id}/poll`
const REGISTRATION_URL = `${BASE_API_URL}/users`
const USER_PUSH_STATUS_URL = `${BASE_API_URL}/users/push_status`
const USER_SUBSCRIBE_URL = `${BASE_API_URL}/users/subscribe`
const USER_UNSUBSCRIBE_URL = `${BASE_API_URL}/users/unsubscribe`
const USER_ADD_TREND_URL = stream_id =>
  `${BASE_API_URL}/streams/${stream_id}/trands`
const USER_LIKE_TREND_URL = (stream_id, like_id) =>
  `${BASE_API_URL}/streams/${stream_id}/trands/${like_id}/like`
const ANALYTIC_URL = `${BASE_API_URL}/users/analytic`
const AUTH_SING_URL = `${BASE_API_URL}/users/signin_auth_code`
const GET_FEED_URL = stream_id => `${BASE_API_URL}/streams/${stream_id}/feed`

const USER_LK_URL = `${BASE_API_URL}/users/profile`
const USER_PICTURE_URL = `${BASE_API_URL}/users/picture`

const RESET_PASSWORD_SETUP_STEP_1 = `${BASE_API_URL}/users/reset_step_1`
const RESET_PASSWORD_SETUP_STEP_2 = `${BASE_API_URL}/users/reset_step_2`
const RESET_PASSWORD_SETUP_STEP_3 = `${BASE_API_URL}/users/reset_step_3`


// Add a request interceptor
axios.interceptors.request.use(
  function(config) {
    const sign_token = store.getters.token

    if (sign_token) {
      if (config.method === 'get') {
        config.params = {
          ...config.params,
          sign_token,
        }
      } else {
        if (config.data instanceof FormData) {
          config.data.append('sign_token', sign_token)
        } else {
          config.data = {
            ...config.data,
            sign_token,
          }
        }
      }

    } else {
    }

    const locale = store.getters.lang

    if (locale) {
      if (config.method === 'get') {
        config.params = {
          ...config.params,
          locale,
        }
      } else {
        if (config.data instanceof FormData) {
          config.data.append('locale', locale)
        } else {
          config.data = {
            ...config.data,
            locale,
          }
        }
      }
    }

    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a request interceptor
axios.interceptors.response.use(function(response) {
  if (response.data.status === 'error') {
    if (response.data.message === 'sign_token_invalid') {
      store.dispatch('user/logOut')
    }
  }
  return response
})

export const getVideo = (userId) => {
  return axios.post(GET_INITIAL_VIDEO, {user_id: userId}).then(({data}) => data)
}

export const acceptVideo = (videoId, userId) => {
  return axios.post(ACCEPT_VIDEO, {
    user_id: userId, video_id: videoId,
  }).then(({data}) => {
    return data
  })
}

export const cancelVideo = (videoId, userId) => {
  return axios.post(CANCEL_VIDEO,
    {
      user_id: userId, video_id: videoId,
    },
  ).then(({data}) => data)
}

export const pushStatusesUser = (status, subs_id) => {
  return axios
    .post(USER_PUSH_STATUS_URL, {
      sign_token: getUserToken(),
      status,
      subs_id,
    })
    .then(data => data.data)
}

export const loadEventData = (stream_id, speech_id) => {
  return axios
    .get(EVENT_URL(stream_id), {
      params: {
        speech_id,
        sign_token: getUserToken(),
      },
    })
    .then(data => {
      const dataStream = data.data

      if (dataStream.data && dataStream.status === 'success') {
        dataStream.data.streams = dataStream.data.streams.map(function({
                                                                         speeches,
                                                                         speakers,
                                                                         ...stream
                                                                       }) {
          return {
            ...stream,
            speeches: JSON.parse(speeches),
            speakers: JSON.parse(speakers),
          }
        })
      }

      return JSON.parse(JSON.stringify(data.data))
    })
}

export const loginRequest = (stream_id, data) => {
  return axios.post(LOGIN_URL, data).then(data => {
    return data.data
  })
}

export const sendMessageRequest = (stream_id, message) => {
  return axios
    .post(SEND_MESSAGE_URL(stream_id), {
      sign_token: getUserToken(),
      message,
    })
    .then(data => data.data)
}

export const getMessageData = (stream_id, message_id) => {
  return axios
    .get(GET_MESSAGE_URL(stream_id, message_id), {
      params: {
        sign_token: getUserToken(),
      },
    })
    .then(data => data.data)
}

export const sendVoteAnswer = (stream_id, comment_id, answer) => {
  return axios
    .post(SEND_VOTE_ANSWER_URL(stream_id, comment_id), {
      sign_token: getUserToken(),
      answer,
    })
    .then(data => data.data)
}

export const registrationRequest = (stream_id, user) => {
  return axios
    .post(REGISTRATION_URL, {
      user,
    })
    .then(data => data.data)
}

export const popupCenter = ({url, title, w = 600, h = 800}) => {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : window.screenX
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : window.screenY

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height

  const systemZoom = width / window.screen.availWidth
  const left = (width - w) / 2 / systemZoom + dualScreenLeft
  const top = (height - h) / 2 / systemZoom + dualScreenTop
  const newWindow = window.open(
    url,
    title,
    `
      scrollbars=yes,
      width=${w / systemZoom},
      height=${h / systemZoom},
      top=${top},
      left=${left}
      `,
  )

  if (window.focus) newWindow.focus()
}

export const subscribeUser = speech_id => {
  return axios
    .post(USER_SUBSCRIBE_URL, {
      sign_token: getUserToken(),
      speech_id,
    })
    .then(data => data.data)
}

export const unSubscribeUser = speech_id => {
  return axios
    .post(USER_UNSUBSCRIBE_URL, {
      sign_token: getUserToken(),
      speech_id,
    })
    .then(data => data.data)
}

export const userAddTrendRequest = (stream_id, title) => {
  return axios
    .post(USER_ADD_TREND_URL(stream_id), {
      sign_token: getUserToken(),
      title,
    })
    .then(data => data.data)
}

export const userLikeTrendRequest = (stream_id, like_id) => {
  return axios
    .post(USER_LIKE_TREND_URL(stream_id, like_id), {
      sign_token: getUserToken(),
    })
    .then(data => data.data)
}

export const analyticRequest = (user_action, data) => {

  const stream_id = store.getters['streams/getActiveStreamId']

  return axios
    .post(ANALYTIC_URL, {
      stream_id,
      user_action,
      data,
    })
    .then(data => data.data)
    .catch(error => {
    })
}

export const autoSingRequest = auth_code => {
  return axios
    .post(AUTH_SING_URL, {
      auth_code,
    })
    .then(data => data.data)
}

export const resetPasswordRequest = email => {
  return axios
    .post(RESET_PASSWORD_URL, {
      email,
    })
    .then(data => data.data)
}

export const resetPasswordSuccessRequest = reset_token => {
  return axios
    .post(RESET_PASSWORD_FINISH_URL, {
      reset_token,
    })
    .then(data => data.data)
}

export const zoomSpeakersRequest = () => {
  return axios
    .get(GET_ZOOM_SPEAKERS, {
      params: {
        sign_token: getUserToken(),
      },
    })
    .then(data => data.data)
}

export const messagesRequest = stream_id => {
  return axios
    .get(GET_FEED_URL(stream_id), {
      params: {
        sign_token: getUserToken(),
      },
    })
    .then(data => data.data)
}

export const resetPasswordOne = data => {
  /*
  Метод: Сброс пароля шаг 1
  Механика: Проверка существования пользователя и отправка письма для сброса пароля

  POST http://pokerback.tooladigital.ru/api/out/users/reset_step_1
  Обязательные поля: email

  Возможные ответы:

  Успешно { status: :success } (письмо с ссылкой для сброса ушло)
  Юзер не найден в базе { status: :error, info: :not_valid }
  Не переданы все обязательные поля поля { status: :error, info: :missing_required_fields }
  */

  const requiredField = ['number_chk', 'email']
  let isValid = allValueRequired(data, requiredField)

  if (!isValid) {
    return Promise.resolve({
      status: 'error',
      info: 'missing_required_fields',
    })
  }

  return axios.post(RESET_PASSWORD_SETUP_STEP_1, data).then(({data}) => data)
}
export const resetPasswordTwo = reset_token => {
  //  ?reset_token=f12873884a72d07096510fd57ea6ee02
  /*
  Метод: Сброс пароля шаг 2 (после шага 1 приходит письмо с ссылкой вида http://poker.tooladigital.ru/?reset_token=ТОКЕН)
  Механика: Проверяем токен на валидность

  POST http://pokerback.tooladigital.ru/api/out/users/reset_step_2
  Обязательные поля: reset_token

  Возможные ответы:

  Успешно { status: :success, email: user.email } (показываем форму с установкой пароля и емейлом юзера)
  Токен не валидный { status: :error, info: :not_valid }
  Не переданы все обязательные поля поля { status: :error, info: :missing_required_fields }
  */
  return axios
    .post(RESET_PASSWORD_SETUP_STEP_2, {reset_token})
    .then(({data}) => data)
}
export const resetPasswordThree = passwordData => {
  /*
  Метод: Сброс пароля шаг 3
  Механика: Проверяем токен на валидность и сохраняем пароль в базу

  POST http://pokerback.tooladigital.ru/api/out/users/reset_step_3
  Обязательные поля: reset_token, password

  Возможные ответы:

  Успешно { status: :success } (кидаем на логин)
  Пароль пустой либо меньше 6 символов, т.е. не валидный { status: :error, info: :password_min_6 }
  Токен не валидный { status: :error, info: :not_valid }
  Не переданы все обязательные поля поля { status: :error, info: :missing_required_fields }
  */

  const requiredField = ['reset_token', 'password']
  let isValid = allValueRequired(passwordData, requiredField)

  if (!isValid) {
    return Promise.resolve({
      status: 'error',
      info: 'missing_required_fields',
    })
  }

  return axios
    .post(RESET_PASSWORD_SETUP_STEP_3, passwordData)
    .then(({data}) => data)
}

export const getUserProfileData = () => {
  return axios.get(USER_LK_URL).then(({data}) => data)
}

export const updateUserProfileData = data => {
  return axios.post(USER_LK_URL, data).then(({data}) => data)
}

export const updateUserPhoto = (data, onUploadProgress) => {
  return axios
    .post(USER_PICTURE_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress,
    })
    .then(({data}) => data)
}

/************************
 * NEW API HEAR
 ************************/
const POST_GET_USER_PROFILE = `${BASE_API_URL}/users/get_user_data`
const POST_REQUEST_UPDATE_USER_PROFILE = `${BASE_API_URL}/users/profile`
const POST_REQUEST_UPDATE_USER_PICTURE = `${BASE_API_URL}/users/picture`

const BASE_STREAM_API_URL = `${BASE_API_URL}/streams`
const POST_GET_STREAM_URLS = (stream_id = 1) =>
  `${BASE_STREAM_API_URL}/${stream_id}/get_by_id`
const POST_GET_STREAM_SPEECHES = (stream_id = 1) =>
  `${BASE_STREAM_API_URL}/${stream_id}/speeches`
const POST_GET_SPEECH_SLIDES = (speech_id = 1) =>
  `${BASE_API_URL}/speeches/${speech_id}/slides/`

//tests
const POST_REQUEST_FOR_TESTS = `${BASE_API_URL}/event_tests`
const POST_REQUEST_FOR_TESTS_QUESTION = test_id =>
  `${BASE_API_URL}/event_tests/${test_id}/questions`
const POST_TEST_RESULTS = id => `${BASE_API_URL}/event_tests/${id}/done`

export const sentTestResults = (answers, id) => {
  const results = {
    answers: answers,
  }
  return axios.post(POST_TEST_RESULTS(id), results).then(data => data.data)
}

///victorinas
const POST_REQUEST_LOAD_VICTORINES = `${BASE_API_URL}/event_victorinas`
const POST_REQUEST_LOAD_VICTORINES_QUESTIONS = v_id =>
  `${POST_REQUEST_LOAD_VICTORINES}/${v_id}/questions`

const POST_QUIZ_RESULTS = id => `${BASE_API_URL}/event_victorinas/${id}/done`

export const sentQuizResults = (answers, id) => {
  const results = {
    answers: answers,
  }

  return axios.post(POST_QUIZ_RESULTS(id), results).then(res => res.data)
}

// Points
const POST_REQUEST_FOR_POINTS = `${BASE_API_URL}/users/points`

// GOODS
const POST_REQUEST_FOR_GOODS = `${BASE_API_URL}/goods_categories/categories`
const POST_REQUEST_FOR_PURCHASE_GOOD = id => `${BASE_API_URL}/goods_categories/${id}/purchase`
// NOMINANTS
const POST_REQUEST_FOR_NOMINANTS = `${BASE_API_URL}/nominants/nominants`
const POST_REQUEST_FOR_NOMINANT = id => `${BASE_API_URL}/nominants/${id}/nominant`
const POST_REQUEST_FOR_CREATE_NOMINATE_COMMENT = id => `${BASE_API_URL}/nominants/${id}/nominant_comment`

export const loadUserInformation = () => {
  //https://coral.tooladigital.ru/apidocs#tag/users/paths/~1api~1out~1users~1reset_step_3/post

  return axios.post(POST_GET_USER_PROFILE).then(({data}) => {
    return data
  })
}
export const loadStreamUrls = (stream_id = 1) => {
  return axios.post(POST_GET_STREAM_URLS(stream_id)).then(({data}) => data)
}
export const loadStreamSpeeches = (stream_id = 1) => {
  //https://coral.tooladigital.ru/apidocs#operation/get%20speeches

  return axios.post(POST_GET_STREAM_SPEECHES(stream_id)).then(({data}) => data)
}
export const loadStreamSlides = (speech_id = 1) => {
  //https://coral.tooladigital.ru/apidocs#tag/speeches/paths/~1api~1out~1speeches~1:id~1slides/get
  return axios
    .get(POST_GET_SPEECH_SLIDES(speech_id), {
      id: speech_id,
    })
    .then(({data}) => data)
}
export const loadTests = () => {
  return axios.post(POST_REQUEST_FOR_TESTS).then(({data}) => data)
}

export const loadTestsQuestions = test_id => {
  return axios
    .post(POST_REQUEST_FOR_TESTS_QUESTION(test_id))
    .then(({data}) => data)
}

export const loadVictorinas = () => {
  return axios.post(POST_REQUEST_LOAD_VICTORINES).then(({data}) => data)
}

export const loadVictorinasQuestions = v_id => {
  return axios
    .post(POST_REQUEST_LOAD_VICTORINES_QUESTIONS(v_id))
    .then(({data}) => data)
}

export const loadPoints = () => {
  return axios.post(POST_REQUEST_FOR_POINTS)
}

export const updateProfile = (data) => {
  return axios.post(POST_REQUEST_UPDATE_USER_PROFILE, data)
}

export const loadGoodsCategories = () => {
  return axios.post(POST_REQUEST_FOR_GOODS)
}

export const purchaseGoodCategory = (id) => {
  return axios.post(POST_REQUEST_FOR_PURCHASE_GOOD(id))
}

export const loadNominants = () => {
  return axios.post(POST_REQUEST_FOR_NOMINANTS)
}

export const loadNominant = (id) => {
  return axios.post(POST_REQUEST_FOR_NOMINANT(id))
}

export const createNominatesComment = (id, data) => {
  return axios.post(POST_REQUEST_FOR_CREATE_NOMINATE_COMMENT(id), data)
}

export const loadRequestSpeakers = (stream_id) => {
  return axios.post(`${BASE_STREAM_API_URL}/${stream_id}/speakers`).then(data => data.data)
}

export const loadAchivmentsSpeakers = (stream_id, code) => {
  return axios.post(`${BASE_STREAM_API_URL}/${stream_id}/users/add_points`, {
    code,
  }).then(data => data.data)
}

export const sendResultsForVoting = (id, answer_id) => {
  //и сам метод проголосовать
  // POST /api/out/polls
  // передаешь ID (poll id)

  return axios.post(`${BASE_API_URL}/polls`, {
    id,
    answer_id,
  }).then(data => data.data)
}
export const loadResultsForVoting = (id) => {
  return axios.get(`${BASE_API_URL}/polls/${id}`, {})
    .then(data => data.data)
}


//новое ади для задать вопрос
export const sendNewQuestionForSpeaker = (speech_id = 1, data) => {
  return axios.post(`${BASE_API_URL}/speeches/${speech_id}/chats/publish_question`, data).then(data => data.data)
}

