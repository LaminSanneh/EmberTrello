import Ember from 'ember';

export default Ember.Controller.extend({
  overlayOpen: true,
  actions:{
    closeOverlay: function(){
      this.set('overlayOpen', false);
      this.transitionToRoute('board', this.get('model.list.board'));
    }
  }
});
