import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.find('card',params.card_id);
  },
  renderTemplate: function() {
    console.log('In template render');
    this.render({
      into: 'application',
      outlet: 'overlay-popup'
    });
  },
  setupController: function(controller, model){
    this._super(controller, model);
    controller.set('overlayOpen', true);
  },
  actions: {
    updateModel: function(title, model){
      console.log(arguments);
      model.set('title', title);
      model.save();
    }
  }
});
