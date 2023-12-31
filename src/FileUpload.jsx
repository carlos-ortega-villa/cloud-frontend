import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function App() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles([...files, ...acceptedFiles]);
  }, [files]);

  const { getRootProps, getInputProps, inputRef } = useDropzone({ onDrop });

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url);
  };

  const handleDelete = (event, fileToDelete) => {
    event.stopPropagation();
    setFiles(files.filter((file) => file !== fileToDelete));
   };

  const handleFileClick = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>react-dropzone module demo</h4>
      <button onClick={handleClick}>Seleccionar archivo</button>
      <div {...getRootProps()}>
        <input {...getInputProps()} style={{ display: 'none' }} />
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <a href="#" onClick={handleFileClick}>
                {file.name}
              </a>{' '}
              <button onClick={() => handleDownload(file)}>Descargar</button>
              <button onClick={(event) => handleDelete(event, file)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}