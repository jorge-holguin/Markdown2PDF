// highlight.js.d.ts
declare module 'highlight.js' {
    export function highlight(language: string, code: string, ignoreIllegals?: boolean, continuation?: any): { value: string };
    export function highlightAuto(code: string, languageSubset?: string[]): { value: string };
    export function getLanguage(name: string): boolean | undefined;
  }
  