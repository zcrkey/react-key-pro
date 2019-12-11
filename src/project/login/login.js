import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HttpServer from '../../utils/httpServer';
import GlobalDataUtils from '../../utils/globalDataUtils';
import styles from './login.module.scss';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    // 模式：development、production、test
    console.log("__NODE___：" + process.env.NODE_ENV);
    if (process.env.NODE_ENV == 'development') {
      this.setState({
        username: 'zcr',
        password: '306306'
      });
    }

    console.log('componentWillMount');
    this.init();
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  async init() {
    let result = await HttpServer.get('/api/sys/init');
    console.log('init:', result);
    if (!!result) {
      await GlobalDataUtils.init(result);
    }
  }

  async login() {
    // 判断密码是否为空
    if (this.state.username === '' || this.state.password === '') {
      alert('账号或密码不能为空');
      return;
    }
    let result = await HttpServer.postJson('/api/user/loginIn', {
      clientType: "pc",
      username: this.state.username,
      password: this.state.password
    });
    console.log('loginIn:', result);
    if (!!result) {
      GlobalDataUtils.setToken(result.token);

      // 跳转到 main 页面
      this.props.history.replace('/main');

      // 跳转到 main - request 页面
      // this.props.history.replace('/main/request');

    }
  }

  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.box}>
          <div className={styles.boxHeader}>
            请登录 Sign in
          </div>
          <div className={styles.boxBody}>
            <div className={styles.group}>
              <div className={styles.label}>用户名 Username</div>
              <div className={styles.content}>
                <FontAwesomeIcon className={styles.icon} icon="user" />
                <input className={styles.input} type="text" placeholder="请输入用户名" value={this.state.username}
                  onChange={(e) => {
                    this.setState({
                      username: e.target.value
                    });
                  }}></input>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.label}>密 码 Password</div>
              <div className={styles.content}>
                <FontAwesomeIcon className={styles.icon} icon="lock" />
                <input className={styles.input} type="password" placeholder="请输入密码" value={this.state.password}
                  onChange={(e) => {
                    this.setState({
                      password: e.target.value
                    });
                  }}></input>
              </div>
            </div>
            <div className={styles.group}>
              <button type="button" className={styles.button} onClick={() => this.login()}>登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}