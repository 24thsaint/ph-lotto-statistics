import React from 'react';
import AddEntries from './AddEntries.dumb';
import { Grid } from '@material-ui/core';
import './AddEntries.css';
import EntriesTable from './EntriesTable.dumb';
import { inject, observer } from 'mobx-react';

@inject('store') @observer
class AddEntriesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.lottoStore = this.props.store.lottoStore;
  }

  render() {
    return (
      <Grid container direction="column" justify="center" id="addEntriesContainer">
        <Grid container item>
          <AddEntries />
        </Grid>
        <Grid container item>
          {
            this.lottoStore.batchResult ? <EntriesTable /> : undefined
          }
        </Grid>
      </Grid>
    );
  }
}

export default AddEntriesContainer;