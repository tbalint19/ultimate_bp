import React from 'react'
import AppComponent from 'appComponent'
import {
  Intro,
  Title,
  UsernameInput,
  UsernameInputInfo,
  EmailInput,
  EmailInputInfo,
  PasswordInput,
  PasswordInputInfo,
  PasswordAgainInput,
  PasswordAgainInputInfo,
  SignupButton
} from './components'

class Signup extends AppComponent {
  constructor(props){
    super(props)
    this.pendingUsername = false
    this.pendingEmail = false
    this.pendingSignup = false
    this.shouldCheckUsername = false
    this.shouldCheckEmail = false
    this.signup = {}
    this.update()
  }

  update(){
    this.pendingUsername = this._state.pendingResponses.find(entry => entry.url == "/profile/checkusername" && entry.params.username == this.signup.username)
    this.pendingEmail = this._state.pendingResponses.find(entry => entry.url == "/profile/checkemail" && entry.params.email == this.signup.email)
    this.pendingSignup = this._state.pendingResponses.find(entry => entry.url == "/profile/signup")
    this.shouldCheckUsername = this._state.signup.shouldCheckUsername
    this.shouldCheckEmail = this._state.signup.shouldCheckEmail
    this.signup = this._state.signup
  }

  componentWillReceiveProps(props){
    super.componentWillReceiveProps(props)
    this.update()
    if (this.shouldCheckUsername){ this.get({ url: "/profile/checkusername", params: {username: this._state.signup.username} }) }
    if (this.shouldCheckEmail){ this.get({ url: "/profile/checkemail", params: {email: this._state.signup.email} }) }
  }

  requestSignup(){
    this.post({url: "/profile/signup", data: {
      username: this.signup.username,
      email: this.signup.email,
      password: this.signup.password
    }})
  }

  usernameIsLong(){ return this.signup.username.length > 5}
  usernameIsValid(){ return this.signup.username.match(/^[A-Za-z0-9]+$/) }
  emailIsValid(){ return this.signup.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) }
  passwordIsLong(){ return this.signup.password.length > 5 }
  passwordIsValid(){ return this.signup.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]/) }
  passwordAgainExists(){ return this.signup.passwordAgain.length > 0 }
  passWordMatches(){ return this.signup.password == this.signup.passwordAgain }
  signupIsPossible(){
    return (
      this.usernameIsLong() && this.usernameIsValid() && this.emailIsValid() &&
      this.passwordIsLong() && this.passwordIsValid() && this.passWordMatches() &&
      !this.shouldCheckUsername && !this.shouldCheckEmail &&
      !this.pendingUsername && !this.pendingEmail && !this.pendingSignup &&
      !this.signup.usernameError && !this.signup.emailError
    )
  }

  render() {
    return (
      <div className={"signup-component-container"}>
        <div className={"intro-container"}>
          <Intro open={()=>this.openPage("https://github.com/tbalint19/ultimate_bp")}/>
        </div>
        <div className={"signup-container"}>
          <div className={"card" + (this.pendingSignup ? " in-transition" : "")}>
            <Title/>
            <div className={"signup-input-container"}>
              <UsernameInput pending={this.pendingSignup} username={this.signup.username} placeholder={"Username"}
                action={(event)=>this.changeInputField("signup.username", event)}/>
              <UsernameInputInfo long={this.usernameIsLong()} valid={this.usernameIsValid()}
                pending={this.pendingUsername} error={this.signup.usernameError}/>
            </div>
            <div className={"signup-input-container"}>
              <EmailInput pending={this.pendingSignup} email={this.signup.email} placeholder={"Email"}
                action={(event)=>this.changeInputField("signup.email", event)}/>
              <EmailInputInfo valid={this.emailIsValid()}
                pending={this.pendingEmail} error={this.signup.emailError}/>
            </div>
            <div className={"signup-input-container"}>
              <PasswordInput pending={this.pendingSignup} password={this.signup.password} placeholder={"Password"}
                action={(event)=>this.changeInputField("signup.password", event)}/>
              <PasswordInputInfo long={this.passwordIsLong()} valid={this.passwordIsValid()}/>
            </div>
            <div className={"signup-input-container"}>
              <PasswordAgainInput pending={this.pendingSignup} passwordAgain={this.signup.passwordAgain} placeholder={"Password again"}
                action={(event)=>this.changeInputField("signup.passwordAgain", event)}/>
              <PasswordAgainInputInfo exists={this.passwordAgainExists()} matches={this.passWordMatches()}/>
            </div>
            <div className={"signup-button-container"}>
              <SignupButton active={this.signupIsPossible()} action={()=>this.requestSignup()}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup
