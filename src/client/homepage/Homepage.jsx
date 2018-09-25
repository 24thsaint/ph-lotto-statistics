import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import './Homepage.css';

@inject('store') @observer
class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="column" spacing={24}>
        <Grid item>
          <h2 className="center-text">Welcome, Rave.</h2>
        </Grid>
        <Grid item>
          <Grid container item direction="row" justify="center" spacing={16}>
            <Grid item>
              <Link to="/entries/add">
                <Button variant="outlined" color="primary">Add Entries</Button>
              </Link>
            </Grid>

            <Grid item>
              <Link to="/entries/show">
                <Button variant="outlined" color="primary">Show Entries</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;