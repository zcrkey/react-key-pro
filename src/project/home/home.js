import React from 'react';
import StorageUtils from '../../utils/storageUtils';
import { Button } from 'react-key';

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
          <br />
          <Button></Button>
        </div>
      </div >

    )
  }
}