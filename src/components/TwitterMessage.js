import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleEvent = e => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>

        <input type="text" name="message" id="message" onChange={this.handleEvent} value={this.state.message} />
        <h2>You have {this.props.maxChars - this.state.message.length} characters left.</h2>
      </div>
    );
  }
  
}

export default TwitterMessage;
