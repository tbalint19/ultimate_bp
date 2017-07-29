const Cookies = require('./cookies')

export const HttpClient = () => {

  const urlPrefix = "http://localhost:8000"
  const csrftoken = Cookies.get('csrftoken')

  const get = (req, callBack) => {
    const request = new XMLHttpRequest()
    request.open("GET", urlPrefix + req.url, true)
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        callBack(req, this.status, this.responseText)
      }
    }
    request.send()
  }

  const post = (req, callBack) => {
    const request = new XMLHttpRequest()
    request.open("POST", urlPrefix + req.url, true)
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request.onreadystatechange = function() {
      if (this.readyState == 4) {
        callBack(req, this.status, this.responseText)
      }
    }
    request.send(JSON.stringify(req.data))
  }

  return {get, post}

}
