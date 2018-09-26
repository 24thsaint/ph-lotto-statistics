import React from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
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
              <Link to="/entries/show">
                <Button variant="outlined" color="primary">Show Lotto Stuff</Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="caption">Nothing else is here. (•-•)</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;