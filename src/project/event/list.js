import React from 'react';

export default class EventList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentWillMount：event-list');

    // state 获取
    let stateParams = this.props.location.state;
    console.log("stateParams:", stateParams);

    // 地址栏截取
    let search = this.props.location.search;
    let paramsStr = search.split('?')[1];
    if (paramsStr) {
      const searchParams = JSON.parse(decodeURI(paramsStr));
      console.log('searchParams:', searchParams);
    }
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