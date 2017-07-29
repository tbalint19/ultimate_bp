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
    this.httpClient.get(request, (from, status, data) => {
      this.report({type: "RESPONSE_ARRIVED", from, status, data})
    })
    this.report({type: "REQUEST_MADE", request})
  }
  post(request){
    this.httpClient.post(request, (from, status, data) => {
      this.report({type: "RESPONSE_ARRIVED", from, status, data})
    })
    this.report({type: "REQUEST_MADE", request})
  }

  initApp(){ this.get({ url: '/profile/api/auth'}) }

  getApp(app){ this.report({type: "APP_CHANGED", app: app}) }

  changeLanguage(language){ this.report({type: "LANGUAGE_CHANGED", language: language}) }

}

export default AppComponent
