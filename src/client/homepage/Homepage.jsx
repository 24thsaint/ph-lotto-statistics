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
      <Grid container direction="column" class="container">
        <Grid item>
          <h2 className="center-text">Welcome, Rave.</h2>
        </Grid>
        <Grid container item direction="row">
          <Link to="/entries/add">
            <Button variant="outlined" color="primary">Lottery</Button>
          </Link>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;