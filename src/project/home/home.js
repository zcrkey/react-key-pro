import React from 'react';
import StorageUtils from '../../utils/storageUtils';

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
    console.log("123");
  }

  logout() {
    this.props.history.replace('/login');
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
      </div >

    )
  }
}