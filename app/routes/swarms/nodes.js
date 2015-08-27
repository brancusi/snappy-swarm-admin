import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    showNode: function(node){
      this.transitionTo('node', node);
    }
  }
});
