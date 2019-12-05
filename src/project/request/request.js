import React from 'react';
import GlobalDataUtils from '../../utils/globalDataUtils';
import HttpServer from '../../utils/httpServer';

const styles = {
  title: {
    fontSize: '0.2rem',
    marginBottom: '15px'
  }
};

export default class Request extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: ''
    };
  }

  setToken() {
    GlobalDataUtils.setToken("123");
  }

  getToken() {
    this.setState({
      token: GlobalDataUtils.getToken()
    });
  }

  async getRequest() {
    debugger;
    let { data } = await HttpServer.get('/aaa/aaa', {
      a: 'aaa',
      b: 'bbb'
    });
    console.log(data);
    debugger;

  }

  render() {
    return (
      <div>
        <h4 style={styles.title}>Request</h4>
        <button onClick={() => { this.setToken() }}>设置token</button>
        <button onClick={() => { this.getToken() }}>获取token</button>
        <br />
        token:{this.state.token}
        <br />
        <button onClick={() => { this.getRequest() }}>get 请求</button>

      </div >

    )
  }
}