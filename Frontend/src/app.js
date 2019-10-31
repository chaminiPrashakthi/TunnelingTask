import React, { Component } from 'react';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' }

  }
  callAPI() {

    fetch("http://15.206.88.74:8000")
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <div>
        <br></br>
        <label>Port :</label>
        <input type="text" id="portVal" name="portVal"></input>
        <br></br>
        <br></br>
        <button onClick={this.callAPI}>CLICK</button>
      </div>
    );
  }
}
export default App;