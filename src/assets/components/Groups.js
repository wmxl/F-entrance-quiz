import React from 'react';
import '../config/config';
import axios from 'axios';
import 'babel-polyfill';

class Groups extends React.Component {
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

  groupStudent = (students) => {
    const list1 = [];
    const list2 = [];
    const list3 = [];
    const list4 = [];
    const list5 = [];
    const list6 = [];

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
    const list = [list1, list2, list3, list4, list5, list6];
    return list;
  };

  render() {
    const list = this.groupStudent(this.state.students);
    return (
      <div>
        <h3>学员分组</h3>
        <table>
          <tr>
            <th>1组</th>
          </tr>
          <tr>
            <td>
              {[...list[0]].map((stu) => (
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
              {[...list[1]].map((stu) => (
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
              {[...list[2]].map((stu) => (
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
              {[...list[3]].map((stu) => (
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
              {[...list[4]].map((stu) => (
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
              {[...list[5]].map((stu) => (
                <span key={stu.id}>
                  {stu.id}.{stu.name}
                </span>
              ))}
            </td>
          </tr>
        </table>

        <div className="cation-content">
          <div className="cation-middle">
            <p>分组列表</p>
            <dl className="cation-list">
              <dt>组1</dt>
              <dd>
                {[...list[0]].map((stu) => (
                  <span key={stu.id}>
                    {stu.id}.{stu.name}
                  </span>
                ))}
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>组2</dt>
              <dd>
                {[...list[1]].map((stu) => (
                  <span key={stu.id}>
                    {stu.id}.{stu.name}
                  </span>
                ))}
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>组3</dt>
              <dd>
                <span name="mode" className="all on">
                  张三
                </span>
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>组4</dt>
              <dd>
                <span name="mode" className="all on">
                  张四
                </span>
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>组5</dt>
              <dd>
                <span name="mode" className="all on">
                  张五
                </span>
              </dd>
            </dl>
            <dl className="cation-list">
              <dt>组6</dt>
              <dd>
                <span name="mode" className="all on">
                  张六
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

export default Groups;
