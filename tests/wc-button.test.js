import { html, fixture, expect } from '@open-wc/testing';
import '../src/wc-button/wc-button.ts';

describe('WcButton', () => {
  it('renders with label', async () => {
    const el = await fixture(html`<wc-button label="Test"></wc-button>`);
    const button = el.shadowRoot.querySelector('[part="button"]');
    expect(button.textContent.trim()).to.equal('Test');
  });

  it('renders with icon', async () => {
    const el = await fixture(html`<wc-button icon="fire" label="Test"></wc-button>`);
    const icon = el.shadowRoot.querySelector('wc-icon');
    expect(icon.name).to.equal('fire');
  });
});