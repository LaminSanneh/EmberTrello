import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('board', params.id);
  },
  setupController: function(controller, model){

    this._super(controller, model);
    model.get('lists').reload();
  }
});
