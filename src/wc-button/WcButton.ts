import { LitElement, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { wcButtonStyles } from './WcButton.styles';

export class WcButton extends LitElement {
  static styles = wcButtonStyles;

  @property() label = '';
  @property() icon = '';

  render() {
    return html`
      <button part="button">
        ${this.icon ? html`<span part="icon">${this.icon}</span>` : ''}
        ${this.label}
      </button>
    `;
  }

  protected willUpdate(_changedProperties: PropertyValues): void {
    super.willUpdate(_changedProperties);
    if (_changedProperties.has('label') || _changedProperties.has('icon')) {
      // Handle any updates needed when label or icon changes
      console.log(`Button updated: label="${this.label}", icon="${this.icon}"`);
    }
  }

  get buttonEl(): Element | null {
    return this.renderRoot.querySelector('[part=button]');
  }

  get iconEl(): Element | null {
    return this.renderRoot.querySelector('[part=icon]');
  }
}

customElements.define('wc-button', WcButton);

declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WcButton;
  }
}