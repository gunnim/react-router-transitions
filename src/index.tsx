import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App, {
  MySettings
} from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App 
    mySettings={new MySettings()}
  />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
