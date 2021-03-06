export const getAllParams = () => {
  const $_GET = []
  if (window) {
    // код, который выполнится только в браузере
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a, name, value) {
      $_GET[name] = value
    })
  } else {
    // код, который выполнится только на сервере
  }
  return $_GET
}

export const getUrlParam = (name) => {
  return getAllParams()[name]
}

export const removeURLParameter = (url, parameter) => {
  //prefer to use l.search if you have a location/link object
  const urlparts = url.split('?')
  if (urlparts.length >= 2) {

    const prefix = encodeURIComponent(parameter) + '='
    let pars = urlparts[1].split(/[&;]/g)

    //reverse iteration as may be destructive
    for (var i = pars.length; i-- > 0;) {
      //idiom for string.startsWith
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1)
      }
    }

    return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '')
  }
  return url
}
