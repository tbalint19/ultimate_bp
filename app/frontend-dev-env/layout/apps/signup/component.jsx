import React from 'react'
import AppComponent from 'appComponent'

class Signup extends AppComponent {

  signup(username, email, password){
    this.post({url: "/profile/api/signup", data: {username, email, password}})
  }

  render() {
    let username = this._state.signup.username
    let email = this._state.signup.email
    let password = this._state.signup.password
    let passwordAgain = this._state.signup.passwordAgain
    return (
      <div className={"signup-component-container"}>
        <div className={"intro-container"}>
          <button className="default-link" onClick={()=>this.openPage("https://github.com/tbalint19/ultimate_bp")}>Boilerplate app</button>
          <p>&gt;&nbsp;ES6, ReactJS, Redux, Python Django, PostreSQL</p>
          <p>&gt;&nbsp;Pip, Virtualenv, Npm, Webpack, Docker</p>
          <p>&gt;&nbsp;Single page application</p>
          <p>&gt;&nbsp;Async authentication (signup, login, logout)</p>
          <p>&gt;&nbsp;Detached admin application</p>
          <p>&gt;&nbsp;AWS deploy in readME</p>
          <p>&gt;&nbsp;Profile upgrade with PayPal in readME</p>
        </div>
        <div className={"signup-container"}>
          <div className={"card"}>
            <div className={"signup-title-container"}>
              <p className={"signup-title"}>Create your account in seconds</p>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                value={username}
                onChange={(event)=>this.changeInputField("signup.username", event)}
                placeholder={"Username"}/>
              <div className={"input-help"}>{username.length > 5 ? "" : "Min. 6 characters"}</div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                value={email}
                onChange={(event)=>this.changeInputField("signup.email", event)}
                placeholder={"Email"}/>
              <div className={"input-help"}>{(email.includes("@") && email.includes(".")) ? "" : "Proper email address"}</div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                value={password}
                type={"password"}
                onChange={(event)=>this.changeInputField("signup.password", event)}
                placeholder={"Password"}/>
              <div className={"input-help"}>{password.length > 5 ? "" : "Min. 6 characters"}</div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                value={passwordAgain}
                type={"password"}
                onChange={(event)=>this.changeInputField("signup.passwordAgain", event)}
                placeholder={"Password again"}/>
              <div className={"input-help"}>{password == passwordAgain ? "" : "Does not match password"}</div>
            </div>
            <div className={"signup-button-container"}>
              <button
                className={"default-button"}
                disabled={
                  username.length < 6 ||
                  email.lenght< 6 || !email.includes("@") || !email.includes(".") ||
                  password.length < 6 || password != passwordAgain
                }
                onClick={()=>this.signup(username, email, password)}>
                Signup&nbsp;&gt;&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
