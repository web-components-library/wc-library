import { css } from 'lit';

export const wcRatingStyles = css`
  :host {
    display: inline-block;
  }

  [part=rating] {
    display: flex;
    gap: 2px;
  }

  wc-icon[part=star] {
    color: var(--rating-empty-color, #dee2e6);
    cursor: pointer;
    transition: color 0.2s ease;
  }

  :host([readonly]) wc-icon[part=star] {
    cursor: default;
  }

  :host([size="small"]) wc-icon[part=star] {
    width: 16px;
    height: 16px;
  }

  :host([size="medium"]) wc-icon[part=star] {
    width: 20px;
    height: 20px;
  }

  :host([size="large"]) wc-icon[part=star] {
    width: 24px;
    height: 24px;
  }
`;