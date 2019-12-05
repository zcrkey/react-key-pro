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


  render() {
    return (
      <div>
        <h4 style={styles.title}>Home</h4>
      </div >

    )
  }
}