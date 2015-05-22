import Ember from 'ember';

export default Ember.Component.extend({
  inEditMode: false,
  title: '',
  click: function(){
    this.set('inEditMode', true);
    this.set('isFocussed', true);
  },
  actions: {
    createNewModel: function(title, modelType, parentModelType, parentId){
      this.sendAction('action', title, modelType, parentModelType,parentId);
      this.set('title', '');
      this.set('inEditMode', false);
    },
    closeForm: function(){
      console.log('Lost Focus');
      this.set('inEditMode', false);
    }
  }
});
