import React from 'react'
import AppComponent from 'appComponent'

class Navbar extends AppComponent {
  requestLogin(credential, password){
    this.post({url: "/profile/login", data: {
      credential: credential,
      password: password
    }})
  }

  requestLogout(){
    this.get({url: "/profile/logout" })
  }

  render() {
    let credential = this._state.login.credential
    let password = this._state.login.password
    let pendingLogin = this._state.pendingResponses.find(entry => entry.url == "/profile/login")
    let pendingLogout = this._state.pendingResponses.find(entry => entry.url == "/profile/logout")
    let currentApp = this._state.app
    return (
      <div className={"navbar-container"}>
        <div className={"navbar-logo-container"}>
          <i className="material-icons md-14 icon-align-left">build</i>
          <span className={"logo-text"}>Boilerplate app</span>
        </div>
        {currentApp == "signup" && <div className={"navbar-login-container"}>
          <input
            className={"default-input"}
            placeholder={"Username"}
            onChange={(event)=>this.changeInputField("login.credential", event)}
            value={credential}/>
          <input
            className={"default-input"}
            placeholder={"Password"}
            type={"password"}
            onChange={(event)=>this.changeInputField("login.password", event)}
            value={password}/>
          <button className={"default-button login-button"} onClick={()=>this.requestLogin(credential, password)}
            disabled={pendingLogin || credential.length < 6 || password.length < 6}>
              {!pendingLogin ?
                <span>Login&nbsp;&gt;&gt;</span> :
                <span><i className={"material-icons md-14 loading-circle"}>data_usage</i></span>}
          </button>
        </div>}
        {(currentApp != "signup" && currentApp != "init") && <div className={"navbar-controller-container"}>
          <button className={"default-button login-button"} onClick={()=>this.requestLogout()}
            disabled={pendingLogout}>
              {!pendingLogout ?
                <span>&lt;&lt;&nbsp;Logout</span> :
                <span><i className={"material-icons md-14 loading-circle"}>data_usage</i></span>}
          </button>
        </div>}
      </div>
    )
  }
}

export default Navbar
