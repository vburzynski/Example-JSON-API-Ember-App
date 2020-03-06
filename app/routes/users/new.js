import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class UsersNewRoute extends Route {
  model() {
    return this.store.createRecord('user');
  }

  @action
  saveUser(user) {
    user.save().then(() => this.transitionTo('users'));
  }

  @action
  cancel() {
    this.transitionTo('users');
  }

  @action
  willTransition() {
    this.controller.get('model').rollbackAttributes();
  }

}
