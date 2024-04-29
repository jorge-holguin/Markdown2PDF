import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Estilos base de CodeMirror
import 'codemirror/theme/darcula.css'; // Tema de CodeMirror
import 'codemirror/mode/gfm/gfm.js'; // Modo GFM para Markdown en CodeMirror
import { initialText } from '../../../Container/Hooks/InitialText'; // Asume que esto es exportado adecuadamente y tipado si es necesario
import './MirrorEditor.css'; // Importamos los estilos CSS.

interface MirrorEditorProps {
  className?: string;
  setText: (text: string) => void;
}

const Mirror: React.FC<MirrorEditorProps> = ({ className, setText }) => {
  return (
    <CodeMirror
      className={`mirror-editor ${className || ''}`}
      value={initialText}
      options={{
        mode: 'gfm',
        theme: 'darcula',
        lineNumbers: true,
        lineWrapping: true
      }}
      onChange={(editor, data, value) => setText(value)}
    />
  );
};

export default Mirror;
