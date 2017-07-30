import React from 'react'
import AppComponent from 'appComponent'

class Signup extends AppComponent {
  render() {
    let username = this._state.signup.username
    let email = this._state.signup.email
    let password = this._state.signup.password
    let passwordAgain = this._state.signup.passwordAgain
    return (
      <div className={"signup-component-container"}>
        <div className={"signup-container"}>
          <input
            onChange={(event)=>this.changeInputField("signup.username", event)}
            placeholder={"Username"}/>
          <input
            onChange={(event)=>this.changeInputField("signup.email", event)}
            placeholder={"Email"}/>
          <input
            onChange={(event)=>this.changeInputField("signup.password", event)}
            placeholder={"Password"}/>
          <input
            onChange={(event)=>this.changeInputField("signup.passwordAgain", event)}
            placeholder={"Password again"}/>
          <button
            disabled={
              username.length < 6 ||
              email.lenght< 6 || !email.includes("@") || !email.includes(".") ||
              password.length < 6 || password != passwordAgain
            }
            onClick={()=>this.signup(username, email, password)}>
            Signup
          </button>
        </div>
      </div>
    )
  }
}

export default Signup
