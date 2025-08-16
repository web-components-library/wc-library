import { LitElement, html, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { wcButtonStyles } from './wc-button.styles';
import '../wc-icon/wc-icon';

export class WcButton extends LitElement {
  static styles = wcButtonStyles;

  @property() label: String = '';
  @property() icon: String = '';
  @property({ type: Boolean, reflect: true }) disabled: Boolean = false;
  @property({ reflect: true }) variant: String = 'default';
  @property({ reflect: true }) size: String = 'medium';
  @property({ type: Boolean }) loading: Boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-width' }) fullWidth: Boolean = false;


  render() {
    const content = html`
      ${this.loading ? html`<wc-icon name="spinner" spin></wc-icon>` : ''}
      ${this.icon && !this.loading ? html`<wc-icon name="${this.icon}"></wc-icon>` : ''}
      ${this.label}
    `;

    return html`
      <button 
        part="button" 
        ?disabled=${this.disabled || this.loading}
      >
        ${content}
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