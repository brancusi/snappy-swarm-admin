import { moduleForModel, test } from 'ember-qunit';

moduleForModel('swarm', 'Unit | Model | swarm', {
  // Specify the other units that are required for this test.
  needs: ['model:node']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
