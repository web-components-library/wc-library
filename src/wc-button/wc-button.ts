import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { wcButtonStyles } from './wc-button.styles';
import { withTooltip } from '../shared/tooltip-mixin';
import '../wc-icon/wc-icon';

export class WcButton extends withTooltip(LitElement) {
  static styles = wcButtonStyles;

  @property() label: string = '';
  @property() icon: string = '';
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ reflect: true }) variant: string = 'default';
  @property({ reflect: true }) size: string = 'medium';
  @property({ type: Boolean }) loading: boolean = false;
  @property({ type: Boolean, reflect: true, attribute: 'full-width' }) fullWidth: boolean = false;


  render() {
    const content = html`
      ${this.loading ? html`<wc-icon name="spinner" spin disable-tooltip></wc-icon>` : ''}
      ${this.icon && !this.loading ? html`<wc-icon name="${this.icon}" disable-tooltip></wc-icon>` : ''}
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
}

customElements.define('wc-button', WcButton);

declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WcButton;
  }
}