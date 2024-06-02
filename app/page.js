"use client"
import { useState } from "react";
import './globals.css';

//Se definen las varibles con el useState, para actualizar constantemente el estado de cada variable
export default function Home() {
  const [file, setFile] = useState(null);
  const [ancho, setWidth] = useState('');
  const [alto, setHeight] = useState('');
  const [previewUrl, setPreview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor seleccione un archivo para subir');
      return;
    }
  };
  
  //Funciones para prevenir errores y caídas
const handleFileSubmit = (e) => {
    e.preventDefault();
  };

const handleSizeSubmit = (e) => {
    e.preventDefault();
    console.log("Ancho:", ancho, "Alto:", alto);
};

//SUBIR EL ARCHIVO
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  //DESCARGAR LA IMAGEN
  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement('a');
      link.href = previewUrl;
      link.setAttribute('download', 'imagen');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (

    <div className="container">
      <h1>Conversor de imágenes bacano :D </h1>
    {/* Caja para seleccionar archivo */}
      <form onSubmit={handleFileSubmit}>
        <div className="form-section">
          <label className="custom-file-upload">
            <input id="file-upload" type="file" onChange={handleImage} />
            Seleccione un archivo
          </label>
        </div>
        {/* <button type="submit" className="submit-button">Enviar Archivo</button> */}
      </form>

      <form onSubmit={handleSizeSubmit}> {/*onSubmit se usa para especificar una función que se ejecutará cuando se envíe un formulario*//*handleSizeSubmit es una avriable en la usaremos para manejar eventos del formulario  */}
        <div className="form-section">
          <div className="input-container">
            <label htmlFor="ancho">Anchura:</label>
            <input
              id="ancho"
              type="number"
              value={ancho}
              onChange={(e) => {
                setWidth(Number(e.target.value));
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="alto">Altura:</label>
            <input
              id="alto"
              type="number"
              value={alto}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
          </div>
        </div>
        <button type="submit" className="submit-button">Enviar Dimensiones</button>
      </form>

      <div className="preview-section">
        <p>Anchura: {ancho} px</p>
        <p>Altura: {alto} px</p>
        {previewUrl && (
          <div>
            <img src={previewUrl} alt="Preview" style={{ width: ancho, height: alto }} />
            <button onClick={handleDownload}>Descargar imagen</button>
          </div>
        )}
      </div>
    </div>
  );
}