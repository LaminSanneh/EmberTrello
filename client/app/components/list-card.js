import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBeingDragged', 'isBeingDraggedOver'],
  //attributeBindings: ['draggable'],
  draggable: true,
  classNames: ['card'],
  isBeingDragged: false,
  dragStart: function(e){
    this.set('isBeingDragged', true);
    //this.set('dragSourceElement', this.element);
    //console.log('Drag');
    //console.log(this.get('dragSourceElement'));
    //e.dataTransfer.effectAllowed = 'move';
    window.dragSource = this;
  },
  dragEnd: function(e){
    this.set('isBeingDragged', false);
    //this.set('isBeingDraggedOver', false);
  },
  //dragEnter: function(e){
  //  this.set('isBeingDraggedOver', true);
  //  e.dataTransfer.effectAllowed = 'move';
  //  e.dataTransfer.dropEffect = 'move';
  //},
  //dragLeave: function(e){
  //  this.set('isBeingDraggedOver', false);
  //},
  //dragOver: function(e){
  //  e.dataTransfer.effectAllowed = 'move';
  //  e.dataTransfer.dropEffect = 'move';
  //},
  drop: function(e) {
    console.log('Dropped');
    return;
    e.preventDefault();
    window.dragTarget = this;
    this.set('isBeingDragged', false);
    this.set('isBeingDraggedOver', false);
    var sourceCard = window.dragSource.get('card'),
        sourceSortOrder = sourceCard.get('sortOrder'),
        targetCard = window.dragTarget.get('card'),
        sourceList  = sourceCard.get('list'),
        targetSortOrder = targetCard.get('sortOrder'),
        targetList  = targetCard.get('list');

    if(sourceCard != targetCard){
      sourceCard.set('sortOrder', targetSortOrder);
      sourceCard.set('list', targetList);
      targetCard.set('sortOrder', sourceSortOrder);
      targetCard.set('list', sourceList);

      window.dragSource.set('card', targetCard);
      window.dragTarget.set('card', sourceCard);

      sourceCard.save();
      targetCard.save();
    }
  },
  click: function(){
    this.get('context.parentView.targetObject').transitionToRoute('board.editCard', this.get('card.list.board'), this.get('card'));
  },
  actions: {
    deleteCard: function(card){
      if(confirm('Are you sure you want to delete card')){
        card.destroyRecord();
      }
    }
  },
  didInsertElement: function(){
    this.$().data('id', this.get('card.id'));
  }
});
