import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBeingDragged', 'isBeingDraggedOver'],
  classNames: ['list'],
//  dragEnter: function(e){
//    if (e.preventDefault) {
//      e.preventDefault();
//    }
//    this.set('isBeingDraggedOver', true);
//    if($(e.target).hasClass('list')){
//
//    }
//  },
//  dragLeave: function(e){
//    this.set('isBeingDraggedOver', false);
//  },
//  dragOver: function(e){
//    if (e.preventDefault) {
//      e.preventDefault();
//    }
//
//    e.dataTransfer.effectAllowed = 'move';
//    e.dataTransfer.dropEffect = 'move';
//  }
  didInsertElement: function(){
    var self = this;
    this.$().data('id', this.get('list.id'));
    this.$().find(".list__cards").sortable({
      connectWith: ".list__cards",
      update: function(event, ui){
        var indexes = {};
        $(this).find(".card").each(function(index){
          indexes[$(this).data('id')] = index;
          console.log($(this).data('id'));
          self.updateSortOrder(indexes, self.get('list.cards'));
        });
      }
    });
  },
  updateSortOrder: function(indexes, cardsArray){
    this.beginPropertyChanges();
    cardsArray.forEach(function(item) {
      var index = indexes[item.get('id')];
      item.set('sortOrder', index+1);
    }, this);
    this.endPropertyChanges();
    this.rerender();
    cardsArray.forEach(function(item) {
      item.save();
    }, this);
  }
});
