import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: '',
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const api = 'http://localhost:8080/students';
    const students = await axios.get(api).then((stu) => stu.data);
    this.setState({ students });
  }

  function
  Student(name) {
    this.name = name;
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  async handleSubmit(event) {

    const api = 'http://localhost:8080/add';
    const name = this.state.name;
    const stu = new this.Student(name);
    await axios.post(api, stu);

    event.preventDefault();

    this.componentDidMount();
  }

  renderStudent = (students) => {
    return [...students].map((stu) => (
      <div key={stu.id}>
        <div>
          {stu.id}
          {stu.name}
        </div>
      </div>
    ));
  };

  render() {
    const { students } = this.state;
    return (
      <div>
        <h3>学员列表</h3>
        <div>{this.renderStudent(students)}</div>

        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Welcome;
