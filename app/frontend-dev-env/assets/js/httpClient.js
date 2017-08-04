const Cookies = require('./cookies')

export const HttpClient = () => {

  const urlPrefix = "http://localhost:8000/api"

  const get = (req, callBack) => {
    const request = new XMLHttpRequest()
    let url = req.url
    if (req.params) {
      Object.keys(req.params).forEach((key, index) => {
        url = url + (index == 0 ? "?" : "&") + key + "=" + req.params[key]
      })
    }
    request.open("GET", urlPrefix + url, true)
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        let res = {status: this.status, data: JSON.parse(this.responseText)}
        callBack(req, res)
      }
    }
    request.send()
  }

  const post = (req, callBack) => {
    const request = new XMLHttpRequest()
    request.open("POST", urlPrefix + req.url, true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.setRequestHeader("X-CSRFToken", Cookies.get('csrftoken'))
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        let res = {status: this.status, data: JSON.parse(this.responseText)}
        callBack(req, res)
      }
    }
    request.send(JSON.stringify(req.data))
  }

  return {get, post}

}
