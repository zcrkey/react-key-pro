import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppOther from './App.other';
import * as serviceWorker from './serviceWorker';

if (document.getElementById('root-other')) {
  ReactDOM.render(<AppOther />, document.getElementById('root-other'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
