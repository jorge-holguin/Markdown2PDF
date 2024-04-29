// src/types/nonaction.d.ts
declare module 'nonaction' {
    export function useProvided<T>(container: any): [T, (value: T) => void];
  }
  