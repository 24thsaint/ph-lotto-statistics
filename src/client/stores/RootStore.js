import LottoStore from './LottoStore';

class RootStore {
  constructor(client) {
    this.lottoStore = new LottoStore(this, client);
  }
}

export default RootStore;