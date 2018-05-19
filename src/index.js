import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const apikey = 'AIjLfIWPiT8qZQH8KeLEfz'

ReactDOM.render(
  <Router>
    <App apikey={apikey} />
  </Router>,
  document.getElementById('root'));

registerServiceWorker();
