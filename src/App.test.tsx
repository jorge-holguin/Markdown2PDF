import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde 'react-dom/client'
import App from './App/App';

test('<App/> renders without crashing', (): void => {
  const div = document.createElement('div');
  // Crea una raíz de ReactDOM y monta el componente
  const root = ReactDOM.createRoot(div); // Usa createRoot para manejar el contenedor
  root.render(<App />);
  root.unmount(); // Desmonta utilizando el método unmount de la raíz
});
