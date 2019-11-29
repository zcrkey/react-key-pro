import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  faIcon: {
    color: '#495057',
    textAlign: 'center',
    width: '5%',
    fontSize: '28px'
  }
};

export default class Fontawesome extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h4><a href='http://fa5.dashgame.com/#/%E5%9B%BE%E6%A0%87' target='_blank'>Fontawesome - All 1544 Awesome Icons</a></h4>
        <FontAwesomeIcon style={styles.faIcon} icon="align-center" />
        <FontAwesomeIcon style={styles.faIcon} icon="align-justify" />
        <FontAwesomeIcon style={styles.faIcon} icon="align-left" />
        <FontAwesomeIcon style={styles.faIcon} icon="align-right" />
        <FontAwesomeIcon style={styles.faIcon} icon="angle-double-down" />
        <FontAwesomeIcon style={styles.faIcon} icon="angle-double-up" />
        <FontAwesomeIcon style={styles.faIcon} icon="angle-double-left" />
        <FontAwesomeIcon style={styles.faIcon} icon="angle-double-right" />
        <FontAwesomeIcon style={styles.faIcon} icon="check-square" />
        <FontAwesomeIcon style={styles.faIcon} icon="coffee" />
        <FontAwesomeIcon style={styles.faIcon} icon="comment-alt" />
        <FontAwesomeIcon style={styles.faIcon} icon="ad" />

        <h4>IconFont</h4>
        <i className="iconfont icon-danxuan"></i>
      </div>
    )
  }
}

