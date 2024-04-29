import { useState, Dispatch, SetStateAction } from "react";
import { initialText } from './InitialText';

type TextState = string;

const useText = (initialValue: TextState = initialText): [TextState, Dispatch<SetStateAction<TextState>>] => {
  const [state, setState] = useState<TextState>(initialValue);
  return [state, setState];
};

export default useText;
