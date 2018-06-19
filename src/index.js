import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { getQuotes } from './data';


const bigData = getQuotes(30);

ReactDOM.render(<App initial={bigData} internalScroll />, document.getElementById('root'));
registerServiceWorker();
