import React from 'react';
import UploadButton from './Upload'; // Importación por defecto
import './Header.css';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const onTransform = () => {
    let candidateTitle = '';
    const previewEl = document.querySelector('.preview') as HTMLElement;
    const candidateTitleEl = previewEl?.querySelector('h1');
    if (candidateTitleEl) {
      candidateTitle = candidateTitleEl.innerText;

      const currentTitle = document.title;
      document.title = candidateTitle;
      window.requestAnimationFrame(() => {
        document.title = currentTitle;
      });
    }
    window.print();
  };

  return (
    <header className={`${className} no-print`}>
      <p className="project">md2pdf</p>
      <iframe
        title="github-button"
        className="project"
        style={{ display: 'block' }}
        src="https://ghbtns.com/github-btn.html?user=realdennis&repo=md2pdf&type=star&count=true"
        frameBorder="0"
        scrolling="no"
        width="100px"
        height="20px"
      />
      <div className="menu">
        <UploadButton className="button upload" />
        <p className="button download" onClick={onTransform}>
          <span role="img" aria-label="download">🎉</span>
          <span>Transform</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
