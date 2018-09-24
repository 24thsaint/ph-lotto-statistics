import { action, observable } from 'mobx';

class FooStore {
  @observable values = {
    foo: '',
    id: ''
  }

  constructor(rootStore, client) {
    this.rootStore = rootStore;
    this.client = client;
    this.fooService = client.service('api/foo');
  }

  @action.bound setValue(event) {
    this.values[event.target.id] = event.target.value;
  }

  @action.bound async save() {
    const result = await this.fooService.create({foo: this.values.foo});
    this.values.id = result._id;
    console.log(result); // eslint-disable-line
  }
}

export default FooStore;