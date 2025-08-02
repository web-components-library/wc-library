import { LitElement, html, PropertyValues } from 'lit';
import { wcButtonStyles } from './WcButton.styles';

export class WcButton extends LitElement {
  static styles = wcButtonStyles;

  static properties = {
    label: { type: String },
    icon: { type: String }
  };

  label = '';
  icon = '';

  render() {
    return html`
      <button>
        ${this.icon ? html`<span class="icon">${this.icon}</span>` : ''}
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
}

customElements.define('wc-button', WcButton);

declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WcButton;
  }
}