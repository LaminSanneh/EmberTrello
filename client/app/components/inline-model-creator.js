import Ember from 'ember';

export default Ember.Component.extend({
  inEditMode: false,
  title: '',
  actions: {
    createNewModel: function(title, modelType, parentModelType, parentId){
      this.container.lookup('route:application').send(this.get('action'), title, modelType, parentModelType,parentId);
      this.set('title', '');
      this.set('inEditMode', false);
    },
    openForm: function(){
      this.set('inEditMode', true);
      this.set('isFocussed', true);
    },
    closeForm: function(){
      console.log('Lost Focus');
      this.set('inEditMode', false);
    }
  }
});
