import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
