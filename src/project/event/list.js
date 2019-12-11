import React from 'react';

export default class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log('componentWillMount：event-list');
  }

  onClickAdd() {
    alert("新增");
  }

  onClickEdit() {
    alert("编辑");
  }

  onClickDelete() {
    alert("删除");
  }

  render() {
    return (
      <div>
        <h4>EventList</h4>
        <button onClick={() => this.onClickAdd()}>Add</button>
        <button onClick={() => this.onClickEdit()}>Edit</button>
        <button onClick={() => this.onClickDelete()}>Delete</button>
        <br></br>
        <br></br>
        <div>这里需要一个弹出层控件</div>

      </div>
    )
  }
}