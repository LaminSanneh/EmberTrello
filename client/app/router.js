import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('lists', function() {});
  this.resource('cards', function() {});
  this.resource('boards', function() {
  });
  this.route('board',{path: '/boards/:id'});
});
