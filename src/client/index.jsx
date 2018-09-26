/* global document */
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'mobx-react';
import { Grid } from '@material-ui/core';

import client from './client';
import RootStore from './stores/RootStore';
import Homepage from './homepage/Homepage';
import AddEntriesContainer from './lottery/AddEntries.smart';
import ShowEntries from './lottery/ShowEntries.smart';
import './index.css';

const rootStore = new RootStore(client);

const Index = () => (
  <Provider store={rootStore}>
    <Router>
      <Grid container justify="center" id="rootContainer">
        <Route exact path='/' component={Homepage} />
        <Route path='/entries/add' component={AddEntriesContainer} />
        <Route path='/entries/show' component={ShowEntries} />
      </Grid>
    </Router>
  </Provider>
);

ReactDOM.render(
  <Index />, document.getElementById('app')
);