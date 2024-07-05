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
      return data.imagenRedimensionada;
    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al redimensionar la imagen');
      return null;
    }
  };

  const convertirFormato = async (imagenRedimensionada) => {
    try {
      const response = await fetch('/api/modificaFormato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imagenURL: imagenRedimensionada,
          nuevoFormato: nuevoFormato,
        }),
      });
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.details || 'Error al convertir el formato de la imagen');
      }
      const data = await response.json();
      setImagenConvertida(data.imagenConvertida);
      return data.imagenConvertida;

    } catch (err) {
      console.error('Error:', err);
      setError(err.message || 'Error al convertir el formato de la imagen');
      return null;
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

  const procesarImagen = async () => {
    const imagenRedimensionada = await modificarDimensiones();
    if (imagenRedimensionada) {
      const imagenFinal = await convertirFormato(imagenRedimensionada);
      if (imagenFinal) {
        setImagenRedimensionada(imagenFinal);
        setImagenConvertida(imagenFinal);
      }
    }
  };
  return (
    <div className="body">{/*Clase para toda la página*/}

      <div className="titulo">
        <img src="conversor_martin.png" alt="Imagen Título" className="image-rendering" style={{ maxWidth: '400px',marginRight: '10px' }}/>
      </div>  

      <div className="container">{/*Esta es la clase dentro de la que van los elementos*/}

        <div className="boxSeleccionImagen">{/*Separacion 1 del container*/}
          <div className="selectImage">
            <label className="custom-file-upload">
                <input id="file-upload" type="file" onChange={onFileChange} />
              Seleccione un archivo
            </label>
            <div id="drop-zone" className="drop-zone">
              Arrastre y suelte su archivo aquí
            </div>
          </div>


          <div>
          {imageData && (
            <div>
              <h3>Preview:</h3>
              <img src={imageData} alt="Uploaded" style={{ maxWidth: '700px' }} />{/*Aqui limitamos el container del preview*/}
              <p>Ancho: {imageDimensions.ancho}px</p>
              <p>Alto: {imageDimensions.alto}px</p>
            </div>
          )}
        </div>
      </div>{/* Fin Container 1 */}

      

      <div className="boxCambioImagen">{/*Separacion 2 del container*/}
      
      <div className="boxData">
        <h3>Elegir Formato</h3>
          <select id="formato" value={nuevoFormato} onChange={(e) => setNuevoFormato(e.target.value)}>
            <option value="jpeg">JPEG</option>
            <option value="png">PNG</option>
            <option value="webp">WEBP</option>
            <option value="tiff">TIFF</option>
            <option value="heic">HEIC</option>
            <option value="avif">AVIF</option>
          </select>

          <div className="input-container">
            <label>Anchura:</label>
            <input
              type="number"
              placeholder={imageDimensions.ancho}
              value={widthInput}
              onChange={(e) => setWidthInput(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label>Altura:ㅤ</label>
            <input
              type="number"
              placeholder={imageDimensions.alto}
              value={heightInput}
              onChange={(e) => setHeightInput(e.target.value)}
            />
          {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
          </div>
          <button className="submit-button" onClick={procesarImagen}>ENVIAR</button>
      </div>


      <div>
  {imagenRedimensionada && (
    <div>
      <h3>Imagen Redimensionada:</h3>
      <img src={imagenRedimensionada} alt="Redimensionada" style={{ maxWidth: '700px' }} />
      <br />
      <button id="download" onClick={() => descargarImagen(imagenConvertida, nuevoFormato)}>
        Descargar Imagen
      </button>
    </div>
  )}
</div>

      </div> {/*Fin Container2*/}

      
      </div>      
    </div>
  );
}
