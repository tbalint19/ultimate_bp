import {createStore} from 'redux'
import stateTree from './stateTree'

import {
  languageReducer
} from './reducers/configReducers'

import {
  appReducer
} from './reducers/coreReducers'

import {
  requestReducer,
  responseReducer
} from './reducers/apiReducers'

const createManager = (() => {

  const initialState = Object.assign({}, stateTree)

  const reducer = (current = initialState, action) => {

    switch (action.type){

      case "APP_CHANGED": return appReducer(current, action)
      case "LANGUAGE_CHANGED": return languageReducer(current, action)
      case "REQUEST_MADE": return requestReducer(current, action)
      case "RESPONSE_ARRIVED": return responseReducer(current, action)

      default: return Object.assign({}, current)

    }

  }

  const appManager = createStore(reducer)
  appManager.loadState = () => { return appManager.getState().state }
  appManager.loadDict = () => { return appManager.getState().dictionary }

  return {appManager}

})()

export default createManager
