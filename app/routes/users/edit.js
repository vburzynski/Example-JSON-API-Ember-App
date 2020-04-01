import Route from '@ember/routing/route';
import { action } from '@ember/object'

export default class UsersEditRoute extends Route {
  model(params) {
    return this.store.findRecord('user', params.id);
  }

  @action
  saveUser(user) {
    user.save()
      .then(() => this.transitionTo('users'));
  }

  @action
  cancel() {
    this.transitionTo('users');
  }

  @action
  willTransition(transition) {
    let model = this.controller.get('model');
    if (model.get('hasDirtyAttributes')) {
      let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");
      if (confirmation) {
        model.rollbackAttributes();
      } else {
        transition.abort();
      }
    }
  }
}
