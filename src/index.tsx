import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './styles.css';
import App from './App/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootElement = document.getElementById('root') as HTMLElement;

// [Prevent] The redirect of file drop
window.addEventListener('drop', (e: DragEvent) => e.preventDefault(), true);
// window.addEventListener('dragstart', (e: DragEvent) => e.preventDefault(), true);
window.addEventListener('dragover', (e: DragEvent) => e.preventDefault(), true);
// window.addEventListener('dragleave', (e: DragEvent) => e.preventDefault(), true);
window.addEventListener('beforeunload', (e: BeforeUnloadEvent) => {
  const msg = 'Please check and backup the change before refresh or leave.';
  e.returnValue = msg; // Set the returnValue on the event.
  return msg; // For compatibility with older browsers
});

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
}
serviceWorkerRegistration.register();
