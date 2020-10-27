import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  async componentDidMount() {
    const hello = await axios.get('http://localhost:8080/hello');

    this.setState({ data: hello.data });
  }

  render() {
    return <div>欢迎来到{this.state.data}</div>;
  }
}

export default Welcome;
