import React from 'react'

export const Intro = (props) => (
  <div className={"intro"}>
    <button className="default-link" onClick={()=>props.open()}>Boilerplate app</button>
    <p>&gt;&nbsp;ES6, ReactJS, Redux, Python Django, PostreSQL</p>
    <p>&gt;&nbsp;Pip, Virtualenv, Npm, Webpack, Docker</p>
    <p>&gt;&nbsp;Single page application</p>
    <p>&gt;&nbsp;Async authentication (signup, login, logout)</p>
    <p>&gt;&nbsp;Detached admin application</p>
    <p>&gt;&nbsp;AWS deploy in readME</p>
    <p>&gt;&nbsp;Profile upgrade with PayPal in readME</p>
  </div>
)

export const Title = (props) => (
  <div className={"signup-title-container"}>
    <p className={"signup-title"}>Create your account in seconds</p>
  </div>
)

export const UsernameInput = (props) => (
  <input
    className={"default-input signup-input"}
    disabled={props.pending}
    value={props.username}
    onChange={(event)=>props.action(event)}
    placeholder={props.placeholder}/>
)

export const UsernameInputInfo = (props) => (
  <div className={"input-help"}>
    {!props.long ?
      <Info info={"Min. 6 characters"} severity={"info"}/> : !props.valid ?
      <Info info={"Only letters and numbers"} severity={"info"}/> : props.pending ?
      <Info info={"Checking..."} severity={"loading"}/> : props.error ?
      <Info info={"Already occupied"} severity={"error"}/> :
      <Info info={"Available"} severity={"success"}/>
    }
  </div>
)

export const EmailInput = (props) => (
  <input
    className={"default-input signup-input"}
    disabled={props.pending}
    value={props.email}
    onChange={(event)=>props.action(event)}
    placeholder={props.placeholder}/>
)

export const EmailInputInfo = (props) => (
  <div className={"input-help"}>
    {!props.valid ?
      <Info info={"Enter a valid email address"} severity={"info"}/> : props.pending ?
      <Info info={"Checking..."} severity={"loading"}/> : props.error ?
      <Info info={"Already occupied"} severity={"error"}/> :
      <Info info={"Available"} severity={"success"}/>
    }
  </div>
)

export const PasswordInput = (props) => (
  <input
    className={"default-input signup-input"}
    type={"password"}
    disabled={props.pending}
    value={props.password}
    onChange={(event)=>props.action(event)}
    placeholder={props.placeholder}/>
)

export const PasswordInputInfo = (props) => (
  <div className={"input-help"}>
    {!props.long ?
      <Info info={"Min. 6 characters"} severity={"info"}/> : !props.valid ?
      <Info info={"Should contain letter, number and special character"} severity={"info"}/> :
      <Info info={"Accepted"} severity={"success"}/>
    }
  </div>
)

export const PasswordAgainInput = (props) => (
  <input
    className={"default-input signup-input"}
    type={"password"}
    disabled={props.pending}
    value={props.passwordAgain}
    onChange={(event)=>props.action(event)}
    placeholder={props.placeholder}/>
)

export const PasswordAgainInputInfo = (props) => (
  <div className={"input-help"}>
    {!props.exists ?
      <Info info={"Should match password"} severity={"info"}/> : !props.matches ?
      <Info info={"Does not match password"} severity={"error"}/> :
      <Info info={"Matches"} severity={"success"}/>
    }
  </div>
)

export const SignupButton = (props) => (
  <button
    className={"default-button"}
    disabled={!props.active}
    onClick={()=>props.action()}>
    Signup&nbsp;&gt;&gt;
  </button>
)

const Info = (props) => (
  <span className={"signup-input-" + props.severity}>
    {props.info}
    <i className={"material-icons md-9 align-down-right" + (props.severity == "loading" ? " loading-circle" : "")}>
      {props.severity == "info" && "error_outline"}
      {props.severity == "loading" && "data_usage"}
      {props.severity == "error" && "error"}
      {props.severity == "success" && "check_box"}
    </i>
  </span>
)
