import React from 'react'
import AppComponent from 'appComponent'

class Navbar extends AppComponent {
  render() {
    return (
      <div className={"navbar-container"}>
        <div className={"navbar-logo-container"}>
          <i className="material-icons md-14 icon-align-left">build</i>
          <span className={"logo-text"}>Boilerplate app</span>
        </div>
        <div className={"navbar-controller-container"}>
          <input className={"default-input"} placeholder={"Username"}/>
          <input className={"default-input"} placeholder={"Password"}/>
          <button className={"default-button"}>
              Login&nbsp;&gt;&gt;
          </button>
        </div>
      </div>
    )
  }
}

export default Navbar
