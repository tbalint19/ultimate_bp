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
      <div>
        <p>...</p>
      </div>
    )
  }
}

export default Init
