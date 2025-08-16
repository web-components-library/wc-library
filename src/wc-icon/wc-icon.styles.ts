import { css } from 'lit';

export const wcIconStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  [part=icon] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Sizes */
  :host([size="small"]) [part=icon] {
    width: 12px;
    height: 12px;
    font-size: 12px;
  }

  :host([size="medium"]) [part=icon] {
    width: 16px;
    height: 16px;
    font-size: 16px;
  }

  :host([size="large"]) [part=icon] {
    width: 20px;
    height: 20px;
    font-size: 20px;
  }

  /* Spin animation */
  :host([spin]) [part=icon] {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Image icons */
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;