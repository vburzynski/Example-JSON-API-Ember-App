// app/routes/users/new.js
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  actions: {
    saveUser(user) {
      user.save().then(() => this.transitionTo('users'));
    },
    cancel() {
      this.transitionTo('users');
    },
    willTransition() {
      this.controller.get('model').rollbackAttributes();
   }
  }
});
