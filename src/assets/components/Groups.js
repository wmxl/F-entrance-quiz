import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: '',
      // eslint-disable-next-line react/no-unused-state
      list1:[],
      // eslint-disable-next-line react/no-unused-state
      list2:[],
      // eslint-disable-next-line react/no-unused-state
      list3:[],
      // eslint-disable-next-line react/no-unused-state
      list4:[],
      // eslint-disable-next-line react/no-unused-state
      list5:[],
      // eslint-disable-next-line react/no-unused-state
      list6:[]
    };
  }

  async componentDidMount() {
    const api = 'http://localhost:8080/students';
    const students = await axios.get(api).then((stu) => stu.data);
    this.setState({ students });
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

  groupStudent = () => {
    const list1 = [];
    const list2 = [];
    const list3 = [];
    const list4 = [];
    const list5 = [];
    const list6 = [];

    const {students} = this.state;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < students.length; i++) {
      const stu = students[i];
      if (stu.id % 6 === 1) {
        list1.push(stu);
      }
      if (stu.id % 6 === 2) {
        list2.push(stu);
      }
      if (stu.id % 6 === 3) {
        list3.push(stu);
      }
      if (stu.id % 6 === 4) {
        list4.push(stu);
      }
      if (stu.id % 6 === 5) {
        list5.push(stu);
      }
      if (stu.id % 6 === 0) {
        list6.push(stu);
      }
    }
    // eslint-disable-next-line react/no-unused-state
    this.setState({ list1, list2, list3, list4, list5, list6});
    // const list = [list1, list2, list3, list4, list5, list6];
    // return list;
  };

  render() {
    // const list = this.groupStudent(this.state.students);
    const { list1, list2, list3, list4, list5, list6} = this.state;
    return (
      <div>
        <h3>学员分组</h3>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={this.groupStudent}>分组学员</button>
        <table>
          <tr>
            <th>1组</th>
          </tr>
          <tr>
            <td>
              {[...list1].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>2组</th>
          </tr>
          <tr>
            <td>
              {[...list2].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>3组</th>
          </tr>
          <tr>
            <td>
              {[...list3].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>4组</th>
          </tr>
          <tr>
            <td>
              {[...list4].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>5组</th>
          </tr>
          <tr>
            <td>
              {[...list5].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
          <tr>
            <th>6组</th>
          </tr>
          <tr>
            <td>
              {[...list6].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Groups;
