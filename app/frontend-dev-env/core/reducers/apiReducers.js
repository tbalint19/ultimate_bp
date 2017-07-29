import {dictionary} from '../../language.config.js'

export const requestReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses.push(action.request)
  return nextState
}

export const responseReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.pendingResponses = nextState.state.pendingResponses.filter((req) => req != action.from)
  switch (action.from.url){
    case "/profile/api/auth":
      return initializer(current, action)
    default:
      return nextState
  }
}

const initializer = (current, action) => {
  let nextState = Object.assign({}, current)
  updateDict(current)
  nextState.state.app = action.status == 200 ? "home" : "login"
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
