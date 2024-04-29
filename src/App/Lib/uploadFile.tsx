// Definimos una interfaz para describir el tipo esperado para el elemento de CodeMirror, si es conocido.
interface CodeMirrorElement extends HTMLElement {
  CodeMirror?: {
    setValue: (val: string) => void;
  };
}

export default (val: string): void => {
  // Realizamos una aserción de tipo más específica con la interfaz definida.
  const cmElement = document.querySelector('.CodeMirror') as CodeMirrorElement;

  // Verificamos si CodeMirror está presente y establecemos el valor.
  if (cmElement?.CodeMirror) {
    cmElement.CodeMirror.setValue(val);
  } else {
    console.error('CodeMirror instance not found');
  }
};
