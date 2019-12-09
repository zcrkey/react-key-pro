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

  async getRequest() {
    let result = await HttpServer.get('/api/sys/init');
    console.log(result);
  }

  async postRequest() {
    let result = await HttpServer.post('/aaa/aaa', {
      a: 'aaa',
      b: 'bbb'
    });
    console.log(result);
  }

  async postJsonRequest() {
    let result = await HttpServer.postJson('/api/user/loginIn', {
      clientType: "pc",
      username: 'zcr',
      password: '306306'
    });
    console.log(result);
    if (!!result) {
      GlobalDataUtils.setToken(result.token);
    }
  }

  async allRequest() {
    let result = await HttpServer.all([
      '/api/sys/init',
      {
        url: '/api/user/loginIn',
        method: 'postJson',
        data: {
          clientType: "pc",
          username: 'zcr',
          password: '306306'
        }
      }
    ]);
    console.log(result);
  }

  render() {
    return (
      <div>
        <h4 style={styles.title}>Request</h4>
        token:{this.state.token}
        <br />
        <button onClick={() => { this.getRequest() }}>get 请求</button>
        <br />
        <button onClick={() => { this.postRequest() }}>post 请求</button>
        <br />
        <button onClick={() => { this.postJsonRequest() }}>postJson 请求</button>
        <br />
        <button onClick={() => { this.allRequest() }}>all 请求</button>
      </div >

    )
  }
}