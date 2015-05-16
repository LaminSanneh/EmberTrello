import Ember from 'ember';

export default Ember.Controller.extend({
  modelData: {

  },
  actions: {
    createNewModel: function(modelData){
      //if(boardTitle.trim('').length == 0){
      //  return;
      //}

      console.log(modelData);
      this.store.createRecord('board', modelData).save();
      this.set('modelData', {});
    },
    deleteBoard: function(board){
      if(confirm("Are you sure you want to delete this board titled "+board.get('title'))){
        board.destroyRecord();
      }
    }
  }
});
