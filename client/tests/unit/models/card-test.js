import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('card', {
  // Specify the other units that are required for this test.
  needs: ['model:list', 'model:board']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
