import { css } from 'lit';

export const wcButtonStyles = css`
  :host {
    display: inline-block;
  }
  
  [part=button] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 16px;
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    background: var(--button-bg-color);
    color: var(--button-text-color);
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
    text-align: center;
  }
  
  [part=button]:hover {
    background: var(--button-hover-bg-color);
  }
  


  /* Variants */
  :host([variant="primary"]) [part=button] {
    background: var(--button-primary-bg, #007bff);
    color: var(--button-primary-text, #ffffff);
    border-color: var(--button-primary-border, #007bff);
  }

  :host([variant="secondary"]) [part=button] {
    background: var(--button-secondary-bg, #6c757d);
    color: var(--button-secondary-text, #ffffff);
    border-color: var(--button-secondary-border, #6c757d);
  }

  :host([variant="danger"]) [part=button] {
    background: var(--button-danger-bg, #dc3545);
    color: var(--button-danger-text, #ffffff);
    border-color: var(--button-danger-border, #dc3545);
  }

  /* Sizes */
  :host([size="small"]) [part=button] {
    padding: 4px 8px;
    font-size: 12px;
  }

  :host([size="medium"]) [part=button] {
    padding: 8px 16px;
    font-size: 14px;
  }

  :host([size="large"]) [part=button] {
    padding: 12px 24px;
    font-size: 16px;
  }

  /* Disabled state */
  [part=button]:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Focus state */
  [part=button]:focus {
    outline: 2px solid var(--button-focus-color, #007bff);
    outline-offset: 2px;
  }

  [part=button]:focus:not(:focus-visible) {
    outline: none;
  }

  /* Full width */
  :host([full-width]) {
    width: 100%;
  }
  
  :host([full-width]) [part=button] {
    width: 100%;
  }

  /* Link styling */
  a[part=button] {
    text-decoration: none;
    display: inline-flex;
  }
`;