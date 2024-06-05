"use client"
import { useState } from "react";
import './globals.css';
import useImageUploader from "./useImageUploader";
export default function Home() {
  
  const { imageData, handleImageUpload } = useImageUploader();
  const [error, setError] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ ancho: 0, alto: 0 });
  const [imagenRedimensionada, setImagenRedimensionada] = useState(null);
  //esta funcion se ejecuta cuando el usuario elige una imagen en el input
  const onFileChange = async (event) => {
    //obtiene el archivo seleccionado
    const file = event.target.files[0];
    try {
      //await handleImageUpload(file) llama a handleImageUpload y espera a que la promesa se cumpla
      const dataUrl = await handleImageUpload(file);
      //creamos un objeto Image para poder obtener sus dimensiones
      const img =new Image();
      img.onload = () => {
        setImageDimensions({ancho: img.width, alto: img.height})
      };
      img.src=dataUrl;
    //si hay un error durante la subida, se actualiza el estado a error. 
    } catch (err) {
      setError(err);
    }
  
  };

  const modificarDimensiones = async () => {
    try {
      //Llamamos a la api
      const response = await fetch('/api/modificaDimensiones', {
        method: 'POST',
        //creamos un json que se enviará a la api con las dimensiones que querramos, y la imagen subida
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ancho: 700, 
          alto: 700, 
          imagenURL: imageData 
        })
      });
      //esperamos la respuesta de la api, en json
      const data = await response.json();
      setImagenRedimensionada(data.imagenRedimensionada)
    } catch (err) {
      console.error('Error:', err);
      setError(typeof err === 'string' ? err : (err.message || 'Error al redimensionar la imagen'));
    }
  };

//me dio paja colocar lo del css (no tenia idea como)

  return (
    <div className="container">
      <h1>Conversor de imágenes bacano :D </h1>
        <label className="custom-file-upload">
            <input id="file-upload" type="file" onChange={onFileChange} />
            Seleccione un archivo
        </label>
      {/*si ocurre un error en la subida del archivo, esta linea muestra un mensaje de error en rojo*/}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={modificarDimensiones}>
            Cambiar dimensiones
      </button>

      {/*si imageData tiene un valor ocurre lo siguiente */}
      {imageData && (
        <div>
          <h3>Preview:</h3>
          {/*Para mostrarlo en sus valores originales tendriamos que quitar "style={{ maxWidth: '256px'}}" */}
          <img src={imageData} alt="Uploaded" style={{ maxWidth: '256px' }} />
          <p>Ancho: {imageDimensions.ancho}px</p>
          <p>Alto: {imageDimensions.alto}px</p>
        </div>
      )}

      {imagenRedimensionada && (
        <div>
          <h3>Imagen Redimensionada:</h3>
          {/*Para mostrarlo en sus valores originales tendriamos que quitar "style={{ maxWidth: '256px'}}" */}
          <img src={imagenRedimensionada} alt="Redimensionada" />
        </div>
      )}

    </div>
  );
}