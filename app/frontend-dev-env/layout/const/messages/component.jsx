import React from 'react'
import AppComponent from 'appComponent'

class Messages extends AppComponent {
  render() {
    let messages = this._state.messages
    return (
      <div className={"messages-container"}>
        {messages.slice(0).reverse().map((message, index) => (
          <Message message={message} appManager={this.manager} key={message.id}/>
        ))}
      </div>
    )
  }
}

export default Messages

class Message extends AppComponent {
  componentDidMount(){
    setTimeout(()=>{this.deleteMessage(this.props.message)}, 5000)
  }

  deleteMessage(message){
    this.report({type: "MESSAGE_DELETED", message})
  }

  render(){
    return(
      <div className={this.props.message.type}>
        <p className={"message-title"}>{this.props.message.title}</p>
        <p className={"message-content"}>{this.props.message.message}</p>
      </div>
    )
  }
}
