"use client"
import { useState } from "react";
import './globals.css';
import useImageUploader from "./useImageUploader";

export default function Home() {
  const { imageData, handleImageUpload } = useImageUploader();
  const [error, setError] = useState(null);
  const [imageDimensions, setImageDimensions] = useState({ ancho: 0, alto: 0 });

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
    </div>
  );
}