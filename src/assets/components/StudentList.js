import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: '',
    };
  }

  async componentDidMount() {
    const api = 'http://localhost:8080/students';
    const students = await axios.get(api).then((stu) => stu.data);
    this.setState({ students });
  }

  function
  Student(id, name) {
    this.name = name;
    this.id = id;
  }

  addStudent = () => {
    console.log(this.state.students)
    let newStudents = this.state.students;
    const student = new this.Student(16,"新学员")
    newStudents.push(student);
    this.setState({ students: newStudents});
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
        <button onClick={this.addStudent}>添加学员</button>
      </div>
    );
  }
}

export default Welcome;
