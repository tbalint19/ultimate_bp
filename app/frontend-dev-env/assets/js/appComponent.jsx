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

  getApp(app){ this.report({type: "APP_CHANGED", app: app}) }

  openPage(page) { window.open(page) }

  changeInputField(path, event){ this.report({type: "INPUT_FIELD_CHANGED", path, value: event.target.value}) }
}

export default AppComponent
