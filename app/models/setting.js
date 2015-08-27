import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  iso: DS.attr('number'),
  shutterspeed: DS.attr('number'),
  aperture: DS.attr('number'),
  node: DS.belongsTo('node', {async: true})
});
