import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBeingDragged', 'isBeingDraggedOver'],
  classNames: ['list'],
  dragEnter: function(e){
    this.set('isBeingDraggedOver', true);
    if($(e.target).hasClass('list')){

    }
  },
  dragLeave: function(e){
    this.set('isBeingDraggedOver', false);
  }
});
