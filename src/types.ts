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
      };
    }
  }
}

// This export makes the file a module, required for global declarations
export {};