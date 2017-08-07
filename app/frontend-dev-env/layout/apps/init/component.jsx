import React from 'react'
import AppComponent from 'appComponent'

class Init extends AppComponent {
  initApp(){
    this.get({ url: '/profile/auth'})
  }
  componentDidMount(){
    this.initApp()
  }
  render() {
    return (
      <div className={"init-component-container loading"}>
        <i className="material-icons md-120 loading-circle">data_usage</i>
        <p>Initializing...</p>
      </div>
    )
  }
}

export default Init
