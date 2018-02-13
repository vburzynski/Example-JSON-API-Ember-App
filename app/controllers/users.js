// app/controllers/users.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    submit: function() {
      window.alert('wtf');
    },
    saveUser: function(user) {
      user.save()
        .then(() => this.transitionTo('users'));
    }
  }
});
