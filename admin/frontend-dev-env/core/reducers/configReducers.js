export const languageReducer = (current, action) => {
  let nextState = Object.assign({}, current)
  nextState.state.language = action.language
  localStorage.maxoftLanguage = action.language
  nextState.dictionary = {}
  for (let app in dictionary) {
    nextState.dictionary[app] = {}
    for (let word in dictionary[app]) {
      nextState.dictionary[app][word] = dictionary[app][word][nextState.state.language]
    }
  }
  return nextState
}
