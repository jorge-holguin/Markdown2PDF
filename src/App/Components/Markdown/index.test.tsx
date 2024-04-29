import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'nonaction';
import { TextContainer } from '../../Container';
import Markdown from './index';

// Si setupTests.js ya maneja la limpieza, no es necesario importar cleanup
test('<Markdown /> Previewer lazy load should work', async () => {
  const { container } = render(
    <Provider inject={[TextContainer]}>
      <Markdown />
    </Provider>
  );

  // Espera hasta que el elemento de carga sea removido para confirmar la carga del componente lazy
  const Previewer = await waitForElementToBeRemoved(() =>
    container.querySelector('#suspense-loading')
  );

  // Verifica que el contenido cargado no esté vacío
  expect(Previewer.textContent !== '').toEqual(true);
});

// Comentarios adicionales sobre la dificultad de probar CodeMirror directamente en el DOM de Jest
