import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createNewModel: function(title, modelType, parentModelType, parentId){
      console.log(arguments);
      var modelProperties = {
        title: title
      };

      //modelProperties[parentModelType] = this.store.find(parentModelType, parentId);
      var model = this.store.createRecord(modelType, modelProperties);

      model.save().then(function(modelSaved){
        console.log(modelSaved);
        this.store.find(parentModelType, parentId).then(function(parentModel){
          model.set(parentModelType, parentModel);
          parentModel.get(modelType+'s').pushObject(model);
          parentModel.get(modelType+'s').save();
          parentModel.save();
        });
      }.bind(this));
    }
  }
});
