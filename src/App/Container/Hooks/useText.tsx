import { useState, Dispatch, SetStateAction } from "react";
import { initialText } from './InitialText';

export type TextState = string; // Confirma que TextState es de tipo string

// Definición de useText con el tipo TextState adecuado
const useText = (initialValue: TextState = initialText): [TextState, Dispatch<SetStateAction<TextState>>] => {
  const [state, setState] = useState<TextState>(initialValue);
  return [state, setState];
};

export default useText;
