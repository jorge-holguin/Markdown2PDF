declare module 'nonaction' {
    export interface ProviderProps {
      inject: any[];
      children?: React.ReactNode;  // Permitir elementos hijos
    }
    
    export class Provider extends React.Component<ProviderProps> {}
  }