import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['lists'],
  didInsertElement: function(){
    this.$().sortable({
      connectWith: ".lists"
    });
  }
});
