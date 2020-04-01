import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class UsersEditController extends Controller {
  @action
  cancel() {
    this.get('target').send('cancel');
  }

  @action
  saveUser(user) {
    this.get('target').send('saveUser', user);
  }
}
