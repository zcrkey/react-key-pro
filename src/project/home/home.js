import React from 'react';

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

  pushPage(location) {
    if (!!location) {
      this.props.history.push(location);
    }
  }

  render() {
    return (
      <div>
        <h4 style={styles.title}>Home</h4>
        <div>
          <button onClick={() => { this.logout() }}>注销</button>
          <br />
          <button onClick={() => { this.pushPage('/main/event-list') }}>EventList Page</button>
          <br />
          <button><a href='/other.html' target='_blank'>新开页面</a></button>
        </div>
      </div >

    )
  }
}