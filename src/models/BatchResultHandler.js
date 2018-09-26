import Lotto from './Lotto';
import Result from '../../app/models/Result';

class BatchResultHandler {
  constructor(batchResult, category) {
    this.batchResult = batchResult;
    this.category = category;
  }

  process() {
    this.lotto = new Lotto();
    const data = this.batchResult;
    
    const combinations = data.match(/\d+-\d+-\d+-\d+-\d+-\d+/g);
    const dates = data.match(/\d+\/\d+\/\d+/g);
    const jackpots = data.match(/\d+,\d+,\d+.\d+/g);

    const lotto = new Lotto();

    for (let index = 0; index < combinations.length; index++) {
      const combination = combinations[index];
      const date = dates[index];
      const jackpot = jackpots[index];

      const result = new Result(combination, date, jackpot, this.category);
      lotto.addResult(result);
    }
    
    return lotto;
  }
}

export default BatchResultHandler;