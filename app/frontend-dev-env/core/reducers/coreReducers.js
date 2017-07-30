export const appReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.app = action.app
  return nextState
}

export const deleteMessageReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.messages = nextState.state.messages.filter(entry => entry.id != action.message.id)
  return nextState
}
