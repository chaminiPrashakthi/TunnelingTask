import React, { Component } from 'react';

import logo from './logo.svg';

import './app.css';

import axios from 'axios';

class app extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  handleSubmit = async e => {
    console.log("Hi");
    console.log(this.state.post);
    e.preventDefault();

    const response = await
      axios({
        method: 'post',
        headers: {
          'Content-type': 'application/json'
        },
        url: 'http://15.206.88.74:8000/connection',
        data: JSON.stringify({ post: this.state.post })
      });



    // const response = await fetch('/connection', {

    //   method: 'POST',
    //   headers:
    //     new Headers({
    //       'Accept': 'application/json, text/plain, */*',
    //       'Content-type': 'application/json'
    //     }),
    //   body: JSON.stringify({ post: '8967' })
    // });
    const body = await response.data;

    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <a className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">

          </a>
        </header>
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Port Number:</strong>
          </p>
          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
      </div>
    );
  }
}

export default app;