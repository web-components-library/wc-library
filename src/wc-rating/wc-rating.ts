import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { wcRatingStyles } from './wc-rating.styles';
import { withTooltip } from '../shared/tooltip-mixin';
import '../wc-icon/wc-icon';

export class WcRating extends withTooltip(LitElement) {
  static styles = wcRatingStyles;

  @property({ type: Number }) value: number = 0;
  @property({ type: Number }) max: number = 5;
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  render() {
    return html`
      <div part="rating">
        ${Array.from({ length: this.max }, (_, i) => html`
          <wc-icon
            name=${i < this.value ? 'star-fill' : 'star'}
            part="star"
            @click=${() => this._handleClick(i + 1)}
            disable-tooltip
          ></wc-icon>
        `)}
      </div>
    `;
  }

  private _handleClick(rating: number) {
    if (this.readonly) return;
    this.value = rating;
    this.dispatchEvent(new CustomEvent('change', { detail: { value: this.value } }));
  }

  protected getTooltipTarget(): HTMLElement | null {
    return this.renderRoot.querySelector('[part=rating]');
  }
}

customElements.define('wc-rating', WcRating);

declare global {
  interface HTMLElementTagNameMap {
    'wc-rating': WcRating;
  }
}