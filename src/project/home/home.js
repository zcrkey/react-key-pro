import React from 'react';
import StorageUtils from '../../utils/storageUtils';
import { Button, Input, Iconfont } from 'react-key';

import 'react-key/lib/index.css';

const styles = {
  title: {
    fontSize: '0.2rem',
    marginBottom: '15px'
  }
};

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  logout() {
    StorageUtils.removeToken();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <h4 style={styles.title}>Home</h4>
        <div>
          <button onClick={() => { this.logout() }}>注销</button>
          <br />
          <button onClick={() => { StorageUtils.removeToken() }}>移除token</button>
        </div>
        <br />
        <h4 style={styles.title}> React Key NPM 组件包</h4>
        <div>
          <Iconfont name={'danxuan'}></Iconfont>
          <Iconfont name={'yuanxingweixuanzhong'}></Iconfont>
          <Iconfont name={'fangxingxuanzhong'}></Iconfont>
          <Iconfont name={'fangxingweixuanzhong'}></Iconfont>
          <br />
          <Button text={'默认按钮'} />
          <Button type={'primary'} text={'按钮一'} />
          <Button type={'normal'} text={'按钮二'} />
          <Button type={'warm'} text={'按钮三'} />
          <Button type={'danger'} text={'按钮四'} />
          <Button type={'disabled'} text={'按钮五'} />
          <div style={{ width: '300px', marginTop: '15px' }}>
            <Input />
          </div>
        </div>
      </div >

    )
  }
}