import React from 'react'
import AppComponent from 'appComponent'

class Home extends AppComponent {
  componentDidMount(){
    this.get({ url: '/profile/details' })
  }
  render() {
    let fetchingInit = this._state.pendingResponses.find(entry => entry.url == "/profile/details")
    return (
      <div>
        {fetchingInit && <div className={"home-init-loading-container"}><Loading text={"Setting up the application..."}/></div>}
        {!fetchingInit && <p>Welcome!</p>}
      </div>
    )
  }
}

export default Home

const Loading = (props) => (
  <div className={"loading"}>
    <i className="material-icons md-120 loading-circle">data_usage</i>
    <p>{props.text}</p>
  </div>
)
