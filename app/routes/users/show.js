import Route from '@ember/routing/route';

export default class UsersShowRoute extends Route {
  model(params) {
    return this.get('store').findRecord('user', params.id);
  }
}
