import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(reducers)}>
      <Router>
        <ParallaxProvider>
          <App />
        </ParallaxProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
