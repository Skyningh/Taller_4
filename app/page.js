"use client"
import { useState } from "react";
import './globals.css';
import useImageUploader from "./useImageUploader";

export default function Home() {
  const { imageData, handleImageUpload } = useImageUploader();
  const [error, setError] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ ancho: 0, alto: 0 });
  const [imagenRedimensionada, setImagenRedimensionada] = useState(null);
  const [widthInput, setWidthInput] = useState(0);
  const [heightInput, setHeightInput] = useState(0);
  const [nuevoFormato, setNuevoFormato] = useState('jpeg');
  const [imagenConvertida, setImagenConvertida] = useState(null);

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
//esta funcion la encontre en todos lados para descargar, creo que es como generica
  const descargarImagen = (url, formato) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `imagen.${formato}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //aqui empieza el codigo en si, lo anterior solo eran funciones
  return (
      <div className="body">

        <div className="container1">
          <div className="box">
            <h1>El mejor conversor de imágenes</h1>
            <label className="custom-file-upload">
            <input id="file-upload" type="file" onChange={onFileChange} />
            Seleccione un archivo
            </label>
          </div>

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
          <button onClick={modificarDimensiones}>Cambiar dimensiones</button>

          </div>
          <h3>Elegir Formato</h3>

          <select value={nuevoFormato} onChange={(e) => setNuevoFormato(e.target.value)}>
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="webp">WEBP</option>
          </select>
          <button onClick={convertirFormato}>Convertir Formato</button>
        </div>


        <div class="previsualizaciones">
          <div class="box">
            {imageData && (
              <div>
                <h3>Preview:</h3>
                <img src={imageData} alt="Uploaded" style={{ maxWidth: '256px' }} />
                <p>Ancho: {imageDimensions.ancho}px</p>
                <p>Alto: {imageDimensions.alto}px</p>
              </div>
            )}
          </div>

          <div class="box">
            {imagenRedimensionada && (
              <div>
                <h3>Imagen Redimensionada:</h3>
                <img
                  src={imagenRedimensionada}
                  alt="Redimensionada"
                  style={{ width: `${widthInput}px`, height: `${heightInput}px` }}
                />
                <br />
                <button onClick={() => descargarImagen(imagenRedimensionada, 'jpeg')}>
                  Descargar Imagen
                </button>
              </div>
            )}
          </div>

          <div class="box">
            {imagenConvertida && (
              <div>
                <h3>Imagen Convertida:</h3>
                <img src={imagenConvertida} alt="Convertida" style={{ maxWidth: '256px' }} />
                <br />
                <button classname="a" onClick={() => descargarImagen(imagenConvertida, nuevoFormato)}>
                  Descargar Imagen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
  );}