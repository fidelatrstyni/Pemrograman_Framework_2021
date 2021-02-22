import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Image from './Image';
import { render } from '@testing-library/react';
import HelloComponent from './HelloComponent';
import List from './List';
//import Image from './Image';
import LoginComponent from './LoginComponent';
//function HelloComponent() {
    //return HelloComponent
//}
/*const HelloComponent = ()=> {
  return HelloComponent}

class StateFullComponent extends React.Component
{
  render(){
    return <p>StateFullComponent</p>;
  }
}
ReactDOM.render(<StateFullComponent />, document.getElementById('root'))*/
//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
ReactDOM.render(<LoginComponent />, document.getElementById('root'));
//ReactDOM.render(<HelloComponent />, document.getElementById('root'));
/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

//reportWebVitals();

serviceWorker.unregister();