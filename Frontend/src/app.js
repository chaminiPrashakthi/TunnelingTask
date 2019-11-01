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

  callAPI() {

    console.log(this.state.portVal)
  }

render() {
  return (
    <br></br>
    <label>Port :</label>
    <input type="text" value={this.state.portVal} />
    <br></br>
    <br></br>
    <button onClick={this.callAPI}>CLICK</button>
    );
}
}
export default App;
