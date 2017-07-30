import React from 'react'
import {HttpClient} from 'httpClient'

class AppComponent extends React.Component{
  constructor(props){
    super(props)
    this.manager = props.appManager
    this.httpClient = HttpClient()
    this._state = this.manager.loadState()
    this._dict = this.manager.loadDict()
  }
  componentWillReceiveProps(){
    this._state = this.manager.loadState()
    this._dict = this.manager.loadDict()
  }
  report(action){
    this.manager.dispatch(action)
    console.log("ACTION", action)
  }
  get(request){
    this.httpClient.get(request, (request, response) => {
      this.report({type: "RESPONSE_ARRIVED", request, response})
    })
    this.report({type: "REQUEST_MADE", request})
  }
  post(request){
    this.httpClient.post(request, (request, response) => {
      this.report({type: "RESPONSE_ARRIVED", request, response})
    })
    this.report({type: "REQUEST_MADE", request})
  }

  initApp(){ this.get({ url: '/profile/api/auth'}) }

  getApp(app){ this.report({type: "APP_CHANGED", app: app}) }

  changeLanguage(language){ this.report({type: "LANGUAGE_CHANGED", language: language}) }

  changeInputField(path, event){ this.report({type: "INPUT_FIELD_CHANGED", path, value: event.target.value}) }

  signup(username, email, password){ this.post({url: "/profile/api/signup", data: {username, email, password}}) }

  deleteMessage(message){ this.report({type: "MESSAGE_DELETED", message}) }
}

export default AppComponent
