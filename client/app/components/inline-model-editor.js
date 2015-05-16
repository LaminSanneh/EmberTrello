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
    updateModel: function(title, modelType){
      this.sendAction('action', title, modelType);
      this.set('title', '');
      this.set('inEditMode', false);
    },
    lostFocus: function(){
      console.log('Lost Focus');
      this.set('inEditMode', false);
    }
  }
});
