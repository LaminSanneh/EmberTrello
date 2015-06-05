import Ember from 'ember';

export default Ember.Component.extend(Ember.SortableMixin,{
  classNames: ['lists'],
  sortProperties: ['sortOrder'],
  didInsertElement: function(){
    var self = this;
    this.$().sortable({
      items: ".list:not(.create-list)",
      update: function(event, ui){
        var indexes = {};
        $(this).find(".list:not(.create-list)").each(function(index){
          indexes[$(this).data('id')] = index;
          console.log($(this).data('id'));
          self.updateSortOrder(indexes, self.get('lists'));
        });
      }
    });
  },
  willDestroyElement: function(){

  },
  updateSortOrder: function(indexes, listsArray){
    this.beginPropertyChanges();
    listsArray.forEach(function(item) {
      var index = indexes[item.get('id')];
      item.set('sortOrder', index+1);
    }, this);
    this.endPropertyChanges();
    this.rerender();
    listsArray.forEach(function(item) {
      item.save();
    }, this);
  }
});
