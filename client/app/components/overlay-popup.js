import Ember from 'ember';

export default Ember.Component.extend({
  overlayOpen: true,
  classNames: ['overlay-popup-container'],
  actions: {
    closeOverlay: function(){
        this.set('overlayOpen', false);
        this.sendAction('action');
    },
    updateModel: function(title, model){
      console.log(arguments);
      this.sendAction('updateModel', title, model);
      //this.set('title', '');
      //this.set('inEditMode', false);
    }
  }
});
