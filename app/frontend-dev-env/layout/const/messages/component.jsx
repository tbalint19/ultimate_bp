import React from 'react'
import AppComponent from 'appComponent'

class Messages extends AppComponent {
  render() {
    let messages = this._state.messages
    return (
      <div className={"messages-container"}>
        {messages.slice(0).reverse().map((message, index) => (
          <Message message={message} appManager={this.manager} key={index}/>
        ))}
      </div>
    )
  }
}

export default Messages

class Message extends AppComponent {
  componentDidMount(){
    setTimeout(()=>{this.deleteMessage(this.props.message)}, 3000)
  }
  render(){
    return(
      <div className={this.props.message.type}>
        <p>{this.props.message.title}</p>
        <p>{this.props.message.message}</p>
      </div>
    )
  }
}
