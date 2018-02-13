// app/controllers/users/edit.js
import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    cancel: function() {
      this.get('target').send('cancel');
    },
    saveUser: function(user) {
      this.get('target').send('saveUser', user);
    }
  }
});
