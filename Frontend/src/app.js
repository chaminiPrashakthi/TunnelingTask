import React, { Component } from 'react';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' }

  }
  fromAPI() {

    fetch("http://15.206.88.74:8000/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <label>Port :</label>
        <input type="text" id="portVal" name="portVal"></input>
        <br></br>
        <br></br>
        <button onClick={this.callAPI}>CLICK</button>
      </form>
    );
  }
}
export default App;
