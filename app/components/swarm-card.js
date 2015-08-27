import Ember from 'ember';
import RippleMixin from 'ember-paper/mixins/ripple-mixin';

export default Ember.Component.extend({
  tagName: 'order-card',

  attributeBindings: [],

  click: function(){
    this.sendAction('action', this.get('model'));
  }

});