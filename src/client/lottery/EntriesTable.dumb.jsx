import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Table, TableHead, TableRow, TableCell, TableBody, Grid, Paper } from '@material-ui/core';
import LottoStore from '../stores/LottoStore';
import './AddEntries.css';

@inject('store') @observer
class EntriesTable extends React.Component {
  constructor(props) {
    super(props);
    this.lottoStore = this.props.store.lottoStore;
  }

  render() {
    return (
      <Paper elevation={1} className="table-wrapper">
        <Grid container alignItems="center">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Combinations</TableCell>
                <TableCell>Jackpot</TableCell>
                <TableCell>Draw Date</TableCell>
                <TableCell>Mean</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                this.lottoStore.batchResult.results.map(result => (
                  <TableRow 
                    key={result.getCombination()} 
                    onClick={() => {this.lottoStore.onRowClick(result);}}
                    className={this.lottoStore.selectedResult.combination.join('-') === result.getCombination() ? 'table-selected' : 'table-normal'}
                  >
                    <TableCell>{result.getCombination()}</TableCell>
                    <TableCell>₱{result.jackpot}</TableCell>
                    <TableCell>{result.drawDate}</TableCell>
                    <TableCell>{result.getMean()}</TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Grid>
      </Paper>
    );
  }
}

EntriesTable.propTypes = {
  store: PropTypes.shape({
    lottoStore: PropTypes.instanceOf(LottoStore)
  }),
};

export default EntriesTable;