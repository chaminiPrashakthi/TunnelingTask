import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' }

  }
  callAPI() {
    
    fetch("ws://15.206.88.74:3000")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  componentDidMount() {
    this.callAPI();
  }
  updateState() {
    alert("clicked");
  }

  render() {
    return (
      <div>
        <br></br>
        <label>Port :</label>
        <input type="text" id="portVal" name="portVal"></input>
        <br></br>
        <br></br>
        <button onClick={this.updateState}>CLICK</button>
      </div>
    );
  }
}
export default App;
