// app/routes/users/edit.js
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('user', params.id);
  },
  actions: {
    saveUser(user) {
      user.save()
        .then(() => this.transitionTo('users'));
    },
    cancel() {
      this.transitionTo('users');
    },
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
});
