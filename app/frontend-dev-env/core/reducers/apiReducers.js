import {dictionary} from '../../language.config.js'

export const requestReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses.push(action.request)
  return nextState
}

export const responseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter((req) => req != action.request)
  switch (action.request.url){
    case "/profile/api/auth": return initializer(nextState, action)
    case "/profile/api/signup": return signupResponseReducer(nextState, action)
    default: return nextState
  }
}

const initializer = (current, action) => {
  let nextState = Object.assign({}, current)
  updateDict(current)
  nextState.state.app = action.response.status == 200 ? "home" : "signup"
  return nextState
}

const signupResponseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  let id = Math.random()
  let errorHappened = action.response.data.errors.length > 0
  if (!errorHappened){
    let message = {title: "Congratulations!", message: "Successful registration, you can log in now", type: "success-message", id}
    nextState.state.messages.push(message)
  } else {
    let errors = action.response.data.errors
    let msg = (errors.includes("username") && errors.includes("email")) ?
      "Occupied username and email" :
      (errors.includes("username") || !errors.includes("email")) ?
      "Occupied username" : "Occupied email"
    let message = {title: "Ooops!", message: msg, type: "error-message", id}
    nextState.state.messages.push(message)
  }
  nextState.state.signup.username = errorHappened ? nextState.state.signup.username : ""
  nextState.state.signup.email = errorHappened ? nextState.state.signup.email : ""
  nextState.state.signup.password = errorHappened ? nextState.state.signup.password : ""
  nextState.state.signup.passwordAgain = errorHappened ? nextState.state.signup.passwordAgain : ""
  return nextState
}

const updateDict = (current) => {
  current.state.language = localStorage.language ?
    localStorage.language :
    navigator.language == "hu" ? "hu" : "eng"
  localStorage.language = current.state.language
  current.dictionary = {}
  for (let app in dictionary) {
    current.dictionary[app] = {}
    for (let word in dictionary[app]) {
      current.dictionary[app][word] = dictionary[app][word][current.state.language]
    }
  }
}
