import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.css';
import './css/index.css';

import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
