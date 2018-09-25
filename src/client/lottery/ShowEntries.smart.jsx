import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid } from '@material-ui/core';
import EntriesTable from '../../../app/client/lottery/EntriesTable.dumb';
import { BarChart, CartesianGrid, YAxis, XAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

@inject('store') @observer
class ShowEntries extends React.Component {
  constructor(props) {
    super(props);
    this.lottoStore = this.props.store.lottoStore;
    this. data = [
      {name: 'a', value: 19},
      {name: 'a', value: 4},
      {name: 'a', value: 6}
    ];
  }

  render() {
    let component = 'Loading...';

    if (this.lottoStore.batchResult) {
      component = 
        <Grid container item justify="center" direction="column">
          <Grid item>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart 
                data={this.lottoStore.batchResult.getNormalizedStatistics()}
                margin={{right: 20}}
              >
                <XAxis dataKey="name" interval={0} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Grid>

          <Grid item>
            <EntriesTable />
          </Grid>
        </Grid>;
    }

    return (
      component
    );
  }
}

export default ShowEntries;