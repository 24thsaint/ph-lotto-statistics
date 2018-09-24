import FooStore from './FooStore';

class RootStore {
  constructor(client) {
    this.fooStore = new FooStore(this, client);
  }
}

export default RootStore;