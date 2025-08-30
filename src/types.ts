// React JSX namespace extension
// this file extends the JSX namespace to include custom web components
// it allows TypeScript to recognize custom elements in JSX syntax
// and provides type definitions for their attributes
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'wc-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        label?: string;
        icon?: string;
        disabled?: boolean;
        variant?: string;
        size?: string;
        loading?: boolean;
        tooltip?: string;
      };

      'wc-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          name?: string;
          size?: string;
          spin?: boolean;
          tooltip?: string;
      };

      'wc-rating': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
          value?: number;
          max?: number;
          readonly?: boolean;
          size?: string;
          tooltip?: string;
      };
    }
  }
}

// This export makes the file a module, required for global declarations
export {};