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
  @observable selectedResult = {
    combination: []
  }

  constructor(rootStore, client) {
    this.rootStore = rootStore;
    this.client = client;
    this.lottoService = client.service('api/lotto');
    this.initialize({query: {category: '6/58'}});
  }

  @action async initialize(query = {}) {
    let results = await this.lottoService.find(query);
    
    results = results.sort((a, b) => {
      const aDate = new Date(a.drawDate);
      const bDate = new Date(b.drawDate);

      if (aDate === bDate) {
        return 0;
      }

      return aDate < bDate ? 1 : -1;
    });

    const lotto = new Lotto();
    results.forEach(result => {
      const _result = new Result(result.combination.join('-'), result.drawDate, result.jackpot, result.category);
      lotto.addResult(_result);
    });
    this.batchResult = lotto;
  }

  @action.bound changeCategory(event) {
    const newCategory = event.target.value;
    this.initialize({query: {category: newCategory}});
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
    this.batchResult.results = this.batchResult.results.reverse();
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

  @action.bound onRowClick(result) {
    this.selectedResult = result;
    let scrollY = window.scrollY; // eslint-disable-line
    for (let scroll = scrollY; scroll >= 0; scroll--) {
      setTimeout(() => {
        window.scrollTo(0, scroll); // eslint-disable-line
      }, 500 - (scroll));
    }
  }
}

export default LottoStore;