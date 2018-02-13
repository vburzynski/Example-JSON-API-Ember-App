// app/adapters/application.js
import JSONAPIAdapter from 'ember-data/adapters/json-api';
import { pluralize } from 'ember-inflector';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:10010',

  pathForType(type) {
    return pluralize(type);
  }
});
