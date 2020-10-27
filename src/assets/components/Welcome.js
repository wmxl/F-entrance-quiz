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
    const data = await axios.get('http://localhost:8080/hello');

    // axios.get(api)
    this.setState({ data });

    // .then((response)=> {
    //
    //           // handle success
    //
    //           console.log(response.data);
    //
    //   const tempData = response.data
    //
    //   this.setState({
    //     welcome_list:tempData
    //   })
    //         })
    //
    // .catch(function (error) {
    //           // handle error
    //           console.log(error);
    // })
  }

  render() {
    return <div>欢迎来到{this.state.data}</div>;
  }
}

export default Welcome;
