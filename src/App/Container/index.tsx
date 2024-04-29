import { Container } from 'nonaction';
import useText, { TextState } from './Hooks/useText';

const initialState: TextState = {
    text: "Initial text"
};

export const TextContainer = new Container<TextState>({
    initialState: initialState,
    useHook: useText
});
