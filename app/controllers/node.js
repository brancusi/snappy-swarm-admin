import Ember from 'ember';

export default Ember.Controller.extend({

  pubnub: Ember.inject.service(),

  actions: {
    takePicture: function(){
      this.get('pubnub').publish(this.get('model.id'), {cmd:'captureImage'});
    },

    saveSettings: function() {
      this.get('model.setting').then(function(record){
        record.save();
      });
    },

    tether: function() {
      this.get('pubnub').publish(this.get('model.id'), {cmd:'tether'});
    },

    unTether: function() {
      this.get('pubnub').publish(this.get('model.id'), {cmd:'unTether'});
    },

    captureTethered: function(){
      this.get('pubnub').publish(this.get('model.id'), {cmd:'captureTethered'});
    }
  }

});
