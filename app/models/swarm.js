import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  nodes: DS.hasMany('node', { async: true })
});
