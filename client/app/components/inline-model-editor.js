import Ember from 'ember';

export default Ember.Component.extend({
  inEditMode: false,
  title: '',
  actions: {
    updateModel: function(title, model){
      this.container.lookup('route:application').send(this.get('action'), title, model);
      this.set('title', '');
      this.set('inEditMode', false);
    },
    openForm: function(){
      this.set('inEditMode', true);
      this.set('isFocussed', true);
      this.set('title', this.get('modelItem.title'));
    },
    closeForm: function(){
      console.log('Lost Focus');
      this.set('inEditMode', false);
    }
  }
});
