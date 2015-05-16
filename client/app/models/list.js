import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  board: DS.belongsTo('board'),
  cards: DS.hasMany('cards', {async: true})
});
