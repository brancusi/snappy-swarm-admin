import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('swarms', function() {
    this.route('show', {path:':swarm_id'});
    this.route('nodes', {path:':swarm_id/nodes'});
  });

  this.route('node', {path:'nodes/:node_id'});
  this.route('settings');
});

export default Router;
