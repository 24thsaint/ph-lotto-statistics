import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { Table, TableHead, TableRow, TableCell, TableBody, Grid } from '@material-ui/core';
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
      <Grid container alignItems="center">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Combinations</TableCell>
              <TableCell>Jackpot</TableCell>
              <TableCell>Draw Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.lottoStore.batchResult.results.map(result => (
                <TableRow key={result.getCombination()}>
                  <TableCell>{result.getCombination()}</TableCell>
                  <TableCell>{result.jackpot}</TableCell>
                  <TableCell>{result.drawDate}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </Grid>
    );
  }
}

EntriesTable.propTypes = {
  store: PropTypes.shape({
    lottoStore: PropTypes.instanceOf(LottoStore)
  }),
};

export default EntriesTable;