// src/types/nonaction.d.ts
declare module 'nonaction' {
    interface ContainerProps {
      inject: any[];
    }
  
    export class Container extends React.Component<ContainerProps> {}
  }
  