// react-remarkable.d.ts
declare module 'react-remarkable' {
    import { ComponentType, ReactNode } from 'react';
  
    interface MarkdownProps {
      source: string;
      options?: {
        html?: boolean;
        xhtmlOut?: boolean;
        breaks?: boolean;
        langPrefix?: string;
        linkify?: boolean;
        typographer?: boolean;
        highlight?: (str: string, lang?: string) => string;
      };
      children?: ReactNode;
    }
  
    const Markdown: ComponentType<MarkdownProps>;
    export default Markdown;
  }
  