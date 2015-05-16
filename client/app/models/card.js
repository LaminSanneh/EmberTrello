import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  list: DS.belongsTo('list'),
  sortOrder: DS.attr()
});
