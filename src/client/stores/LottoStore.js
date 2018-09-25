import { action, observable } from 'mobx';
import BatchResultHandler from '../../../app/models/BatchResultHandler';
import Result from '../../models/Result';
import Lotto from '../../../app/models/Lotto';

class LottoStore {
  @observable values = {
    batchResult: '',
    category: '',
    combination: '',
    jackpot: '',
    drawDate: ''
  }
  @observable batchResult = undefined

  constructor(rootStore, client) {
    this.rootStore = rootStore;
    this.client = client;
    this.lottoService = client.service('api/lotto');
    this.initialize();
  }

  @action async initialize() {
    const results = await this.lottoService.find();
    const lotto = new Lotto();
    results.forEach(result => {
      const _result = new Result(result.combination.join('-'), result.drawDate, result.jackpot, result.category);
      lotto.addResult(_result);
    });
    this.batchResult = lotto;
  }

  @action.bound setValue(event) {
    this.values[event.target.id] = event.target.value;
  }

  @action.bound processBatchResult() {
    if (this.values.batchResult === '') {
      alert('Invalid values'); // eslint-disable-line
      return;
    }
    const _batchResult = new BatchResultHandler(this.values.batchResult, this.values.category);
    this.batchResult = _batchResult.process();
  }

  @action.bound async saveBatchResult() {
    const promises = this.batchResult.results.map(result => this.lottoService.create(result));
    await Promise.all(promises);
    alert('Saved!'); // eslint-disable-line
  }

  @action.bound async saveSingleResult() {
    const result = new Result(this.values.combination, this.values.drawDate, this.values.jackpot, this.values.category);
    await this.lottoService.create(result);
    alert('Saved!'); // eslint-disable-line
  }
}

export default LottoStore;