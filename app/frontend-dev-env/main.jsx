import React from 'react'
import ReactDOM from 'react-dom'

const appContainer = document.getElementById('app')

require('appStyle')
require('./layout/style')

import Layout from './layout/root'
import createManager from './core/appManager'

const appManager = createManager.appManager
const render = () => { ReactDOM.render(<Layout appManager={appManager}/>, appContainer) }

appManager.subscribe(render)
render()
