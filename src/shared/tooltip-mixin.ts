import { property } from 'lit/decorators.js';
import { LitElement } from 'lit';

export interface TooltipMixin {
  tooltip: string;
}

class TooltipManager {
  private static tooltipElement: HTMLElement | null = null;
  private static elementListeners = new WeakMap<HTMLElement, { enter: () => void; leave: () => void }>();

  static addTooltip(element: HTMLElement, text: string): void {
    this.removeTooltip(element);
    
    const enterHandler = () => this.showTooltip(element, text);
    const leaveHandler = () => this.hideTooltip();
    
    element.addEventListener('mouseenter', enterHandler);
    element.addEventListener('mouseleave', leaveHandler);
    
    this.elementListeners.set(element, { enter: enterHandler, leave: leaveHandler });
  }

  static removeTooltip(element: HTMLElement): void {
    const listeners = this.elementListeners.get(element);
    if (listeners) {
      element.removeEventListener('mouseenter', listeners.enter);
      element.removeEventListener('mouseleave', listeners.leave);
      this.elementListeners.delete(element);
    }
  }

  private static showTooltip(element: HTMLElement, text: string): void {
    this.hideTooltip();
    
    this.tooltipElement = document.createElement('div');
    this.tooltipElement.textContent = text;
    this.tooltipElement.style.cssText = `
      position: absolute;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      padding: 6px 8px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      z-index: 1000;
      pointer-events: none;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      backdrop-filter: blur(4px);
    `;

    document.body.appendChild(this.tooltipElement);
    this.positionTooltip(element);
  }

  private static positionTooltip(element: HTMLElement): void {
    if (!this.tooltipElement) return;

    const rect = element.getBoundingClientRect();
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    
    this.tooltipElement.style.left = `${rect.left}px`;
    
    const spaceBelow = window.innerHeight - rect.bottom;
    
    if (spaceBelow >= tooltipRect.height + 8) {
      this.tooltipElement.style.top = `${rect.bottom + 8}px`;
    } else {
      this.tooltipElement.style.top = `${rect.top - tooltipRect.height - 8}px`;
    }
  }

  private static hideTooltip(): void {
    if (this.tooltipElement) {
      document.body.removeChild(this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}

// class WcButton extends LitElement { }
// const button = new WcButton(); // button gets type LitElement
// So type of WcButton will be a function that can be called with a constructor (new) with any number of arguments (...args: any[]).
// which produces an instace of LitElement (=> LitElement).
// In JS, every class is a function that can be called with `new` under the hood that's why we use `new (...args: any[]) => LitElement`.
export function withTooltip<T extends new (...args: any[]) => LitElement>(Base: T): T & (new (...args: any[]) => TooltipMixin) {
  class TooltipMixinClass extends Base implements TooltipMixin {
    @property() tooltip: string = '';

    protected firstUpdated(_changedProperties: Map<string, any>): void {
      super.firstUpdated(_changedProperties);
      this.setupTooltip();
    }

    protected updated(changedProperties: Map<string, any>): void {
      super.updated(changedProperties);
      if (changedProperties.has('tooltip')) {
        this.setupTooltip();
      }
    }

    private setupTooltip(): void {
      const targetEl = this.getTooltipTarget();
      if (targetEl) {
        if (this.tooltip && !this.hasAttribute('disable-tooltip')) {
          TooltipManager.addTooltip(targetEl, this.tooltip);
        } else {
          TooltipManager.removeTooltip(targetEl);
        }
      }
    }

    protected getTooltipTarget(): HTMLElement | null {
      return this.renderRoot.querySelector('[part]') as HTMLElement || this;
    }
  }
  return TooltipMixinClass;
}

// Export for direct usage if needed
export { TooltipManager as TooltipUtils };