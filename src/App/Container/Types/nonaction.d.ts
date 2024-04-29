declare module 'nonaction' {
  interface ContainerProps<T> {
      initialState: T;
      useHook: (initialState: T) => [T, React.Dispatch<React.SetStateAction<T>>];
  }
  // En tu archivo de Hooks o donde definiste TextState
export interface TextState {
  text: string;
}


  export class Container<T> {
      private state: T;
      private hook: (initialState: T) => [T, React.Dispatch<React.SetStateAction<T>>];

      constructor(props: ContainerProps<T>) {
          this.state = props.initialState;
          this.hook = props.useHook;
      }

      getState(): T {
          return this.state;
      }

      applyHook(): void {
          const [newState, _] = this.hook(this.state);
          this.state = newState;
      }
  }
}
