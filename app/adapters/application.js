import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { pluralize } from 'ember-inflector';
import { capitalize } from '@ember/string'

export default JSONAPIAdapter.extend({
  host: 'http://localhost:10010',

  pathForType(type) {
    return capitalize(pluralize(type));
  }
});
