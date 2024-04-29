// App.tsx
import React from 'react';
import { Header, Markdown } from './Components';
import { Provider } from 'nonaction';
import { TextContainer } from './Container';
import styles from 'src/App/App.module.css';  // Importa el CSS module

interface AppProps {
  className?: string;
}

const App: React.FC<AppProps> = ({ className }) => {
  className = className ? `${className} ${styles.appContainer}` : styles.appContainer;
  return (
    <div className={className} id="md2pdf-app">
      <Provider inject={[TextContainer]}>
        <Header />
        <Markdown />
      </Provider>
    </div>
  );
};

export default App;
