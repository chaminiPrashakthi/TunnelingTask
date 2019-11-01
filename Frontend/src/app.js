import React, { Component } from 'react';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: '' }

  }
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  callAPI() {
    fetch("/")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));

  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/submit', {
      method: 'POST'
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Port:</strong>
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
export default App;
