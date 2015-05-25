import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewModel: function(title, modelType, parentModelType, parentId){
      var modelProperties = {
        title: title
      };

      var model = this.store.createRecord(modelType, modelProperties);

      this.store.find(parentModelType, parentId).then(function(parentModel){
        var maxSortOrder = null, relatedHasMany;
        model.save().then(function(modelSaved){
          if(modelType == 'card'){
            relatedHasMany = parentModel.get(modelType+'s');

            if(relatedHasMany.get('length') == 0){
              maxSortOrder = 0;
            }
            else{
              maxSortOrder = relatedHasMany.reduce(function(previousValue, item, index, enumerable){
                if(index == 0){
                  return item.get('sortOrder');
                }
                if(previousValue > item.get('sortOrder')){
                  return previousValue;
                }
                else{
                  return item.get('sortOrder');
                }
              });
            }
            model.set('sortOrder', maxSortOrder+1);
          }
          model.set(parentModelType, parentModel);
          parentModel.get(modelType+'s').pushObject(model);
          model.save();
          parentModel.save();
        });
      });
    },
    updateModel: function(title, model){
      model.set('title', title);
      model.save();
    }
  }
});
