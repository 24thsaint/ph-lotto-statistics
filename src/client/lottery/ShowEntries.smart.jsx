import React from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Paper, Typography } from '@material-ui/core';
import EntriesTable from '../../../app/client/lottery/EntriesTable.dumb';
import { BarChart, YAxis, XAxis, Tooltip, Bar, ResponsiveContainer, Cell, Label } from 'recharts';
import './AddEntries.css';

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
    const selectedResult = this.lottoStore.selectedResult;
    const selectedCombination = selectedResult.combination;
    const normalizedCombination = `${selectedCombination.join('-')} | ${selectedResult.drawDate} | ₱${selectedResult.jackpot}`;
    
    if (this.lottoStore.batchResult) {
      component = 
        <Grid container item justify="center" direction="column" spacing={24}>
          <Grid container item justify="center">
            <Typography variant="title">[{selectedCombination.length > 0 ? normalizedCombination : 'Select a result on the table to view highlighted stats'}]</Typography>
          </Grid>
          <Grid item>
            <Paper elevation={2} className="container">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart 
                  data={this.lottoStore.batchResult.getNormalizedStatistics()}
                  margin={{bottom: 20, left: 10}}
                >
                  <XAxis dataKey="name" interval={0}>
                    <Label value="Lotto Numbers" position="bottom" />
                  </XAxis>
                  <YAxis label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Bar dataKey="value">
                    {
                      this.lottoStore.batchResult.getNormalizedStatistics().map((datum) => {
                        if (selectedCombination.includes(datum.name)) {
                          return <Cell fill="#ff69b4" key={datum.name} />;
                        } else {
                          return <Cell fill="#add8e6" key={datum.name} />;
                        }
                      })
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
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