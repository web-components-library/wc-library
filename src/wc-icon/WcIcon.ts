import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { wcIconStyles } from './WcIcon.styles';
import { icons, type IconName } from './icons';

export class WcIcon extends LitElement {
  static styles = wcIconStyles;

  @property() name: IconName | '' = '';
  @property({ reflect: true }) size: String = 'medium';
  @property({ type: Boolean, reflect: true }) spin: Boolean = false;

  render() {
    
    return html`
      <span 
        part="icon" 
      >
        ${icons[this.name as IconName] ? icons[this.name as IconName] : html`<img src="${this.name}" alt="icon" />`}
      </span>
    `;
  }
}

customElements.define('wc-icon', WcIcon);

declare global {
  interface HTMLElementTagNameMap {
    'wc-icon': WcIcon;
  }
}