import set from 'lodash/set'

export const inputReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  set(nextState.state, action.path, action.value)
  nextState = inputSpec(nextState, action)
  return nextState
}

const inputSpec = (current, action) => {
  let nextState = Object.assign({}, current)
  return nextState
}
