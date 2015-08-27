import Ember from 'ember';
import ENV from 'swarm-admin/config/environment';

export default Ember.Service.extend({
  init: function(){
    var client = PUBNUB({
      ssl           : true,
      publish_key   : ENV.PUBLISH_KEY,
      subscribe_key : ENV.SUBSCRIBE_KEY
    });

    this.set('_client', client);
    console.log(client);
  },

  publish: function(channel, message){
    this.get('_client').publish({ 
      channel   : channel,
      message   : message,
      callback  : function(e) { console.log( 'SUCCESS!', e ); },
      error     : function(e) { console.log( 'FAILED! RETRY PUBLISH!', e ); }
    });
  }
});