import set from 'lodash/set'

export const inputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  set(nextState.state, action.path, action.value)
  nextState = inputSpec(nextState, action)
  return nextState
}

const inputSpec = (current, action) => {
  switch (action.path) {
    case "signup.username": return signupUsernameInputReducer(current, action)
    case "signup.email": return signupEmailInputReducer(current, action)

    default: return current
  }
}

const signupUsernameInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (nextState.state.signup.username.length > 5){
    nextState.state.signup.shouldCheckUsername = true
  }
  return nextState
}

const signupEmailInputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  if (nextState.state.signup.email.includes("@") && nextState.state.signup.email.includes(".")){
    nextState.state.signup.shouldCheckEmail = true
  }
  return nextState
}
