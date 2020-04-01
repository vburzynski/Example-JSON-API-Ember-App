import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return this.get('store').findAll('user');
  }
}
