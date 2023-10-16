import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function App() {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleClick = () => {
    const input = document.getElementById('fileInput');
    if (!input.value) {
      input.click();
    }
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    window.open(url);
  };

  const handleDelete = (fileToDelete) => {
    if (document.activeElement !== document.body) {
      setFiles((prevFiles) =>
        prevFiles.filter((file) => file !== fileToDelete)
      );
    }
  };

  const handleFileClick = (event) => {
    event.preventDefault();
  };

  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>Pagina para cargar y descargar archivos</h4>
      <div {...getRootProps()}>
        <input
          {...getInputProps()}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <button onClick={handleClick}>Seleccionar archivo</button>
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              <a href="#" onClick={handleFileClick}>
                {file.name}
              </a>{' '}
              <button onClick={() => handleDownload(file)}>Descargar</button>
              <button onClick={() => handleDelete(file)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}