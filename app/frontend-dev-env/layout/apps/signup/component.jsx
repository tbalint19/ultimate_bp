import React from 'react'
import AppComponent from 'appComponent'

class Signup extends AppComponent {

  signup(username, email, password){
    this.post({url: "/profile/signup", data: {username, email, password}})
  }

  componentWillReceiveProps(props){
    super.componentWillReceiveProps(props)
    if (this._state.signup.shouldCheckUsername) {
      this.get({url: "/profile/checkusername", params: {username: this._state.signup.username} })
    }
    if (this._state.signup.shouldCheckEmail) {
      this.get({url: "/profile/checkemail", params: {email: this._state.signup.email} })
    }
  }

  render() {
    let pendingSignup = this._state.pendingResponses.find(entry => entry.url == "/profile/signup")
    let signup = this._state.signup
    let pendingUsername = this._state.pendingResponses.find(entry => entry.url == "/profile/checkusername" && entry.params.username == signup.username)
    let pendingEmail = this._state.pendingResponses.find(entry => entry.url == "/profile/checkemail" && entry.params.email == signup.email)
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
          <div className={"card" + (pendingSignup ? " in-transition" : "")}>
            <div className={"signup-title-container"}>
              <p className={"signup-title"}>Create your account in seconds</p>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                disabled={pendingSignup}
                value={signup.username}
                onChange={(event)=>this.changeInputField("signup.username", event)}
                placeholder={"Username"}/>
              <div className={"input-help"}>
                {signup.username.length < 6 ?
                  "Min. 6 characters" : pendingUsername ?
                  "Checking..." : signup.usernameError ? "Already occupied" : "Unoccipied"}
              </div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                disabled={pendingSignup}
                value={signup.email}
                onChange={(event)=>this.changeInputField("signup.email", event)}
                placeholder={"Email"}/>
              <div className={"input-help"}>
                {(!signup.email.includes("@") || !signup.email.includes(".")) ?
                  "Proper email address" : pendingEmail ?
                  "Checking..." : signup.emailError ? "Already occupied" : "Unoccupied"}
              </div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                disabled={pendingSignup}
                value={signup.password}
                type={"password"}
                onChange={(event)=>this.changeInputField("signup.password", event)}
                placeholder={"Password"}/>
              <div className={"input-help"}>{signup.password.length > 5 ? "" : "Min. 6 characters"}</div>
            </div>
            <div className={"signup-input-container"}>
              <input
                className={"default-input signup-input"}
                disabled={pendingSignup}
                value={signup.passwordAgain}
                type={"password"}
                onChange={(event)=>this.changeInputField("signup.passwordAgain", event)}
                placeholder={"Password again"}/>
              <div className={"input-help"}>{signup.password == signup.passwordAgain ? "" : "Does not match password"}</div>
            </div>
            <div className={"signup-button-container"}>
              <button
                className={"default-button"}
                disabled={
                  signup.username.length < 6 ||
                  signup.email.lenght< 6 || !signup.email.includes("@") || !signup.email.includes(".") ||
                  signup.password.length < 6 || signup.password != signup.passwordAgain ||
                  pendingSignup || pendingUsername || pendingEmail || signup.emailError || signup.usernameError
                }
                onClick={()=>this.signup(signup.username, signup.email, signup.password)}>
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
