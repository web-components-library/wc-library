import { css } from 'lit';

export const wcButtonStyles = css`
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