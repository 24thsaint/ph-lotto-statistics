import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { TextField, Grid, Button, Paper } from '@material-ui/core';
import LottoStore from '../stores/LottoStore';

@inject('store') @observer
class AddEntries extends React.Component {
  constructor(props) {
    super(props);
    this.lottoStore = this.props.store.lottoStore;
  }

  render() {
    return (
      <Grid item container direction="row" spacing={16} justify="center">
        <Grid item>
          <Paper elevation={1} className="container">
            <Grid item>
              <TextField 
                label="Category"
                margin="normal"
                helperText="Lotto Game Draw Category"
                placeholder="6/xx"
                variant="outlined"
                id="category"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Entries"
                multiline
                rowsMax="4"
                fullWidth
                margin="normal"
                helperText="Lottery Entries"
                variant="outlined"
                id="batchResult"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item container spacing={8}>
              <Grid item>
                <Button color="secondary" variant="outlined" onClick={this.lottoStore.processBatchResult}>
                    Batch Process
                </Button>
              </Grid>
              <Grid item>
                <Button color="primary" variant="outlined" onClick={this.lottoStore.saveBatchResult}>
                    Save All
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <Paper elevation={1} className="container">
            <Grid item>
              <TextField 
                label="Category"
                margin="normal"
                helperText="Lotto Game Draw Category"
                placeholder="6/xx"
                variant="outlined"
                id="category"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Combination"
                margin="normal"
                helperText="Lotto Result Combination"
                placeholder="00-00-00-00-00-00"
                variant="outlined"
                id="combination"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Jackpot"
                margin="normal"
                helperText="Jackpot in PHP"
                placeholder="000,000,000"
                variant="outlined"
                id="jackpot"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item>
              <TextField 
                label="Draw Date"
                margin="normal"
                helperText="Draw Date"
                placeholder="MMMM/DD/YYYY"
                variant="outlined"
                id="drawDate"
                onChange={this.lottoStore.setValue}
              />
            </Grid>
            <Grid item container justify="flex-end">
              <Grid item>
                <Button color="primary" variant="outlined" onClick={this.lottoStore.saveSingleResult}>
                    Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

AddEntries.propTypes = {
  store: PropTypes.shape({
    lottoStore: PropTypes.instanceOf(LottoStore)
  }),
};

export default AddEntries;