import React from 'react'

import ViewDependencies from 'viewDependencies'

import NavBar from './const/navbar/component'
import Footer from './const/footer/component'
import Messages from './const/messages/component'

import Init from './apps/init/component'
import Home from './apps/home/component'
import Signup from './apps/signup/appRoot'

class Layout extends React.Component{
  render(){
    let appManager = this.props.appManager
    let state = appManager.loadState()
    return(
      <div className="app">
        <ViewDependencies/>

        <NavBar appManager={appManager}/>
        {/* Apps */}
        {state.app == "init" && <Init appManager={appManager}/>}
        {state.app == "signup" && <Signup appManager={appManager}/>}
        {state.app == "home" && <Home appManager={appManager}/>}

        <Footer appManager={appManager}/>

        {/* Messages */}
        <Messages appManager={appManager}/>

      </div>
    )
  }
}

export default Layout
