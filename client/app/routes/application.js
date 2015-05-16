import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewModel: function(title, modelType, parentModelType, parentId){
      console.log(arguments);
      var modelProperties = {
        title: title
      };

      //if(modelType == 'card'){
      //  modelProperties['sortOrder'] =
      //}

      var model = this.store.createRecord(modelType, modelProperties);

      this.store.find(parentModelType, parentId).then(function(parentModel){
        var maxSortOrder = null, relatedHasMany;
        model.save().then(function(modelSaved){
          console.log(parentModel);
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
                if(previousValue.get('sortOrder') > item.get('sortOrder')){
                  return previousValue.get('sortOrder');
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
      console.log(arguments);
      model.set('title', title);
      model.save();
    }
  }
});
