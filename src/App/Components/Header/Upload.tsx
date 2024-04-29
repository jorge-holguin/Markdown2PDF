import React from 'react';
import uploadFile from '../../Lib/uploadFile'; // Asegúrate de que está correctamente tipado y exportado.

interface UploadButtonProps {
  className?: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ className }) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = (loadEvent: ProgressEvent<FileReader>) => {
        if (loadEvent.target?.readyState !== 2) return;
        if (loadEvent.target.error) {
          alert('Error while reading file');
          return;
        }
        const content = loadEvent.target.result as string;
        uploadFile(content);
      };

      reader.readAsText(file);
    }
  };

  return (
    <div className={className} style={{ position: 'relative' }}>
      <input
        id="file-upload"
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
        accept=".md"
      />
      <label htmlFor="file-upload" style={{
          position: 'absolute',
          opacity: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          cursor: 'pointer'
        }}>
        <span role="img" aria-label="upload">📁</span>
        <span>Choose</span>
      </label>
    </div>
  );
};

export default UploadButton;
