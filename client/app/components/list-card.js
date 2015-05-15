import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBeingDragged', 'isBeingDraggedOver'],
  attributeBindings: ['draggable'],
  draggable: true,
  classNames: ['card'],
  isBeingDragged: false,
  didInsertElement: function(){

  },
  dragStart: function(e){
    this.set('isBeingDragged', true);
  },
  dragEnd: function(e){
    this.set('isBeingDragged', false);
  },
  dragOver: function(e){
    this.set('isBeingDraggedOver', true);
  },
  dragLeave: function(e){
    this.set('isBeingDraggedOver', false);
  },
  actions: {
  }
});
