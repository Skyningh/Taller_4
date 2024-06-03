"use client"
import { useState } from "react";
import './globals.css';


// Se definen las variables con el useState, para actualizar constantemente el estado de cada variable
export default function Home() {
  
  const [file, setFile] = useState(null);
  const [ancho, setWidth] = useState('');
  const [alto, setHeight] = useState('');
  const [previewUrl, setPreview] = useState('');
  const [imagenRedimensionada, setImagenRedimensionada] = useState(''); // Declaración del estado

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Por favor seleccione un archivo para subir');
      return;
    }
  };

  // Funciones para prevenir errores y caídas
  const handleFileSubmit = (e) => {
    e.preventDefault();
  };

  const handleSizeSubmit = (e) => {
    e.preventDefault();
    console.log("Ancho:", ancho, "Alto:", alto);
  };

  // SUBIR EL ARCHIVO
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // DESCARGAR LA IMAGEN
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imagenRedimensionada;
    link.download = 'imagen_redimensionada.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };  
  
    // Función que llama a la "api" donde está el método para redimensionar la imagen.
  // Funciona "enviando una solicitud", donde mandamos la imagen y sus dimensiones y "nos responden" 
  // con la imagen redimensionada 
  const handleImageManipulation = async () => {
    try {
      if (!file) {
        alert('Por favor, seleccione una imagen primero.');
        return;
      }
  
      const formData = new FormData();
      formData.append('image', file, file.name); // Añadir el nombre del archivo
      formData.append('ancho', ancho.toString());
      formData.append('alto', alto.toString());
  
      console.log('Enviando datos:', {
        image: file.name,
        ancho: ancho,
        alto: alto
      });
  
      const response = await fetch('/api/manipular_imagen', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage += `, message: ${errorJson.error}`;
        } catch {
          errorMessage += `, message: ${errorText}`;
        }
        throw new Error(errorMessage);
      }
  
      const blob = await response.blob();
      const imagenRedimensionadaUrl = URL.createObjectURL(blob);
      setImagenRedimensionada(imagenRedimensionadaUrl);
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      alert(error.message);
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
      </form>

      <form onSubmit={(e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario
        handleImageManipulation(); // Llama a la función handleImageManipulation cuando se envía el formulario
      }}>
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
        {imagenRedimensionada && (
        <div>
          <img src={imagenRedimensionada} alt="Imagen Redimensionada" />
          <button onClick={handleDownload}>Descargar imagen</button>
        </div>
      )}
      </div> 
    </div>
  );
}
