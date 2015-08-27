import { moduleForModel, test } from 'ember-qunit';

moduleForModel('node', 'Unit | Model | node', {
  // Specify the other units that are required for this test.
  needs: ['model:swarm']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
