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
  doSomething = (companyinfo) => {
    console.log(companyinfo);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.doSomething}>
          <br></br>
          <label>Port :</label>
          <input type="text" />
          <br></br>
          <br></br>
          <button>CLICK</button>
        </form>
      </div>
    );
  }
}
export default App;
