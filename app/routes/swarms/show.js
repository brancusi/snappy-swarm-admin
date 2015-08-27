import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  pubnub: Ember.inject.service(),

  model: function(params){
    return this.store.find('swarm', params.swarm_id);
  },

  actions: {
    tether: function() {
      this.get('pubnub').publish('global', {cmd:'tether'});
    },

    captureTethered: function(){
      this.get('pubnub').publish('global', {cmd:'captureTethered'});
    }
  }
});