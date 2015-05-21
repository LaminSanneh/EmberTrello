import {
  moduleForComponent,
  test
} from 'ember-qunit';

import resolver from '../../helpers/resolver';

moduleForComponent('overlay-popup', {
  // Specify the other units that are required for this test
  needs: ['component:inline-model-editor'],
  beforeEach: function() {
    this.container.register('template:partials/card-inline-model-editor', resolver.resolve('template:partials/card-inline-model-editor'));
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  //var card =
  component.set('card', {
    title: 'Some Title'
  });

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
