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
    border: 1px solid var(--button-border-color);
    border-radius: 4px;
    background: var(--button-bg-color);
    color: var(--button-text-color);
    cursor: pointer;
    font-family: inherit;
    font-size: 14px;
  }
  
  button:hover {
    background: var(--button-hover-bg-color);
  }
  
  .icon {
    width: 16px;
    height: 16px;
  }
`;