"use client"
import { useState, useEffect } from "react";
import './globals.css';
import useImageUploader from "./useImageUploader";

export default function Home() {
  const { imageData, handleImageUpload } = useImageUploader();
  const [error, setError] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ ancho:"", alto: "" });
  const [imagenRedimensionada, setImagenRedimensionada] = useState(null);
  const [widthInput, setWidthInput] = useState();
  const [heightInput, setHeightInput] = useState();
  const [nuevoFormato, setNuevoFormato] = useState(' ');
  const [imagenConvertida, setImagenConvertida] = useState(null);


  //Aqui hay un code con el dropzone para arrastrar archivos
  useEffect(() => {
    const dropZone = document.getElementById('drop-zone');

    const handleDragOver = (e) => {
      e.preventDefault();
      dropZone.classList.add('dragover');
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropZone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      handleFiles(files);
    };

    dropZone.addEventListener('dragover', handleDragOver);
    dropZone.addEventListener('dragleave', handleDragLeave);
    dropZone.addEventListener('drop', handleDrop);

    return () => {
      dropZone.removeEventListener('dragover', handleDragOver);
      dropZone.removeEventListener('dragleave', handleDragLeave);
      dropZone.removeEventListener('drop', handleDrop);
    };
  }, []);

  const handleFiles = (files) => {
    if (files.length > 0) {
      console.log('Archivo arrastrado:', files[0]);
      onFileChange({ target: { files } });
    }
  };

//Aquí termina

  const onFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      const dataUrl = await handleImageUpload(file);
      const img = new Image();
      img.onload = () => {
        setImageDimensions({ ancho: img.width, alto: img.height });

      };
      img.src = dataUrl;
    } catch (err) {
      setError(err.message || 'Error al subir la imagen');
    }
  };

  const modificarDimensiones = async () => {
    try {
      const response = await fetch('/api/modificaDimensiones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ancho: parseInt(widthInput),
          alto: parseInt(heightInput),
          imagenURL: imageData,
        }),
      });
      const data = await response.json();
      setImagenRedimensionada(data.imagenRedimensionada);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al redimensionar la imagen');
    }
  };

  const convertirFormato = async () => {
    try {
      const response = await fetch('/api/modificaFormato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imagenURL: imageData,
          nuevoFormato: nuevoFormato,
        }),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.details || 'Error al convertir el formato de la imagen');
      }
      const data = await response.json();
      setImagenConvertida(data.imagenConvertida);
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al convertir el formato de la imagen');
    }
  };

  const descargarImagen = (url, formato) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `imagen.${formato}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="body">

      <div className="titulo">
        <h1>El mejor conversor de imágenes</h1>
      </div>



      <div className="container" backgroundImage={"/fondo.jpg"}>

        <div className="boxSeleccionImagen">
           <label className="custom-file-upload">
              <input id="file-upload" type="file" onChange={onFileChange} />
            Seleccione un archivo
           </label>
          <div id="drop-zone" className="drop-zone">
            Arrastre y suelte su archivo aquí
          </div>

          <div>
          {imageData && (
            <div>
              <h3>Preview:</h3>
              <img src={imageData} alt="Uploaded" style={{ maxWidth: '256px' }} />
              <p>Ancho: {imageDimensions.ancho}px</p>
              <p>Alto: {imageDimensions.alto}px</p>
            </div>
          )}
        </div>
      </div>{/*Container */}


      <div className="boxCambioImagen">
        <div>
          <label>Anchura:</label>
          <input
            type="number"
            value={widthInput}
            onChange={(e) => setWidthInput(e.target.value)}
          />
        </div>
        <div>
          <label>Altura:</label>
          <input
            type="number"
            value={heightInput}
            onChange={(e) => setHeightInput(e.target.value)}
          />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="custom-file-upload" onClick={modificarDimensiones}>Cambiar dimensiones</button>
        </div>

        <h3>Elegir Formato</h3>
        <select value={nuevoFormato} onChange={(e) => setNuevoFormato(e.target.value)}>
          <option value=" "> </option>
          <option value="jpeg">JPEG</option>
          <option value="png">PNG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={() => { convertirFormato(); modificarDimensiones(); }}>Convertir Formato</button>

        <div>
          {imagenConvertida && (
            <div>
              <h3>Imagen Convertida:</h3>
              <img src={imagenConvertida} alt="Convertida" style={{ maxWidth: '256px' }} />
              <br />
              <button classname="custom-file-upload" onClick={() => descargarImagen(imagenConvertida, nuevoFormato)}>
                Descargar Imagen
              </button>
            </div>
          )}
        </div>

        <div>
          {imagenRedimensionada && (
            <div>
              <h3>Imagen Redimensionada:</h3>
              <img src={imagenRedimensionada} alt="Redimensionada" style={{ maxWidth: '900px' }} />
              <br />
              <button classname="custom-file-upload" onClick={() => descargarImagen(imagenRedimensionada)}>
                Descargar Imagen
              </button>
            </div>
          )}
        </div>

      </div> {/*Container2*/}

      
      </div>      
    </div>
  );
}
