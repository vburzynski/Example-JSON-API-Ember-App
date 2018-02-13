import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr('string', { defaultValue: 'Users' }),
  username: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string')
});
