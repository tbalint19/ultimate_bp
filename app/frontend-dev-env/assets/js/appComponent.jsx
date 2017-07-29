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
    console.log("Component will receive props: " + this.constructor.displayName)
    this._state = this.manager.loadState()
    this._dict = this.manager.loadDict()
    console.log("The new state of the component (" + this.constructor.displayName + ") is:", this._state)
  }
  report(action){
    this.report(action)
    console.log("Action reported: " + action.type, action)
  }
  get(url){
    this.httpClient.get(url)
    console.log("GET - " + url)
  }
  post(url, data){
    this.httpClient.post(url, data)
    console.log("POST - " + url, data)
  }

  getApp(app){
    this.report({type: "APP_CHANGED", app: app})
  }

  changeLanguage(language){
    this.report({type: "LANGUAGE_CHANGED", language: language})
  }

}

export default AppComponent
