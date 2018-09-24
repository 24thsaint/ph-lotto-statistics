/* global document */
import 'typeface-roboto';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';

import client from './client';
import RootStore from './stores/RootStore';
import Homepage from './homepage/Homepage';

const rootStore = new RootStore(client);

const Index = () => (
  <Provider store={rootStore}>
    <Router>
      <Route path='/' component={Homepage} />
    </Router>
  </Provider>
);

ReactDOM.render(
  <Index />, document.getElementById('app')
);