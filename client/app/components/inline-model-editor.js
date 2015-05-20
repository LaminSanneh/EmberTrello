import Ember from 'ember';

export default Ember.Component.extend({
  inEditMode: false,
  title: '',
  click: function(){
    this.set('inEditMode', true);
    this.set('isFocussed', true);
    this.set('title', this.get('modelItem.title'));
  },
  actions: {
    updateModel: function(title, model){
      this.sendAction('action', title, model);
      this.set('title', '');
      this.set('inEditMode', false);
    },
    lostFocus: function(){
      console.log('Lost Focus');
      this.set('inEditMode', false);
    }
  }
});
