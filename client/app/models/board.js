import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  lists: DS.hasMany('list', {async: true})
});
