import React from 'react';

export default class Other extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', fontSize: 30, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        另一个入口的页面应用
      </div>
    )
  }
}