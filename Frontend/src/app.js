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

  handleSubmit = async e => {
    console.log("l")
    e.preventDefault();
    const response = await fetch('"http://15.206.88.74:8000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };


  render() {
    return (
      <div>>
       <form onSubmit={this.handleSubmit}>
          <br></br>
          <label>Port :</label>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })} />
          <br></br>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;
