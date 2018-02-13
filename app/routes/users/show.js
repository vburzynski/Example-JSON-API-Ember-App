// app/routes/users/show.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('user', params.id);
  }
});
