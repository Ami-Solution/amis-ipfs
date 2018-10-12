import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* import 'bootstrap/dist/css/bootstrap.min.css';
/* https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-a-stylesheet*/
/* import ‘bootstrap/dist/css/bootstrap.css’;*/
/* import ‘bootstrap/dist/css/bootstrap-theme.css’;*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
