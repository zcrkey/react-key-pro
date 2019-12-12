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
  }

  pushPage(location) {
    if (!!location) {
      this.props.history.push(location);
    }
  }

  replacePage(location) {
    if (!!location) {
      this.props.history.replace(location);
    }
  }

  render() {
    return (
      <div>pushPage
        <h4 style={styles.title}>Home</h4>
        <div>
          {/* TODO:replace 是替代，不是重置 */}
          <button><a href='/other.html' target='_blank'>新开页面</a></button>
          <br />
          <button onClick={() => { this.replacePage('/login') }}>跳转 - replace</button>
          <br />
          <button onClick={() => {
            this.pushPage({
              pathname: '/login',
              state: {
                a: 1,
                b: '2',
                c: {},
                d: []
              }
            })
          }}>带参数跳转 - replace</button>
          <br />
          <button onClick={() => { this.pushPage('/main/event-list') }}>跳转 - push</button>
          <br />
          <button onClick={() => {
            this.pushPage({
              pathname: '/main/event-list',
              search: encodeURI(JSON.stringify({
                a: 1,
                b: '2',
                c: {},
                d: []
              }))
            })
          }}>跳转 - push - search</button>
          <br />
          <button onClick={() => {
            this.pushPage({
              pathname: '/main/event-list',
              state: {
                a: 1,
                b: '2',
                c: {},
                d: []
              }
            })
          }}>带参数跳转 - push - state </button>
          <br />
          <button onClick={() => { this.props.history.goForward() }}>前进 - goForward  - 有问题</button>
          <br />
          <button onClick={() => { this.props.history.goBack() }}>返回 - goBack</button>
          <br />
          <button onClick={() => { this.props.history.go(2) }}>前进第几个页面 - go  - 有问题</button>
          <br />
          <button onClick={() => { this.props.history.go(-2) }}>返回第几个页面 - go</button>
          <br />
          <button onClick={() => {
            this.props.history.listen(() => {
              console.log("listen");
              // window.addEventListener('hashchange', () => {
              // })
            })
          }}>监听地址栏发生变化 - listen</button>
          <br />
          <button onClick={() => {
            let href = this.props.history.createHref('/main/event-list');
            console.log('href:', href);
          }}>创建herf - createHref - 有问题</button>
        </div>
      </div >

    )
  }
}