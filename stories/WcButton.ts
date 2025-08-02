import { LitElement, html, css, PropertyValues } from 'lit';

export class WcButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    
    button {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid var(--button-border-color, #ccc);
      border-radius: 4px;
      background: var(--button-bg-color, #fff);
      color: var(--button-text-color, #000);
      cursor: pointer;
      font-family: inherit;
      font-size: 14px;
    }
    
    button:hover {
      background: var(--button-hover-bg-color, #f5f5f5);
    }
    
    .icon {
      width: 16px;
      height: 16px;
    }
  `;

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