import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | LoginTile', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function () {
    await render(hbs`<LoginTile />`);
  });
});
