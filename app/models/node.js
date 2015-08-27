import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  swarm: DS.belongsTo('swarm', {async: true}),
  setting: DS.belongsTo('setting', {async: true}),
  latestFileURL: DS.attr('string')
});
