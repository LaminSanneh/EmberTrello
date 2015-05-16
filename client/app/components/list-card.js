import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBeingDragged', 'isBeingDraggedOver'],
  attributeBindings: ['draggable'],
  draggable: true,
  classNames: ['card'],
  isBeingDragged: false,
  dragStart: function(e){
    this.set('isBeingDragged', true);
    //this.set('dragSourceElement', this.element);
    console.log('Drag');
    console.log(this.get('dragSourceElement'));
    e.dataTransfer.effectAllowed = 'move';
    //e.dataTransfer.setData('text/html', this.element.innerHTML);
    //window.dragSourceElement = this.element;
    window.dragSource = this;
  },
  dragEnd: function(e){
    this.set('isBeingDragged', false);
    this.set('isBeingDraggedOver', false);
  },
  dragEnter: function(e){
    this.set('isBeingDraggedOver', true);
  },
  dragLeave: function(e){
    this.set('isBeingDraggedOver', false);
  },
  dragOver: function(e){
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
  },
  drop: function(e) {
    e.preventDefault();
    //var dragSourceElement = window.dragSourceElement;
    //if(dragSourceElement != this.$().get(0)){
    //  dragSourceElement.innerHTML = this.$().html();
    //  this.$().html(e.dataTransfer.getData('text/html'));
    //}
    window.dragTarget = this;
    this.set('isBeingDragged', false);
    this.set('isBeingDraggedOver', false);
    var sourceCard = window.dragSource.get('card'),
        sourceSortOrder = sourceCard.get('sortOrder'),
        sourceList  = sourceCard.get('list'),
        targetCard = window.dragTarget.get('card'),
        targetSortOrder = targetCard.get('sortOrder'),
        targetList  = targetCard.get('list');

    sourceCard.set('sortOrder', targetSortOrder);
    sourceCard.set('list', targetList);
    targetCard.set('sortOrder', sourceSortOrder);
    targetCard.set('list', sourceList);

    window.dragSource.set('card', targetCard);
    window.dragTarget.set('card', sourceCard);

    sourceCard.save();
    targetCard.save();
  }
});
