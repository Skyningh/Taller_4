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
           <input id="file-upload" type="file" onChange={onFileChange} style={{display: 'none'}} />
            <div id="drop-zone" className="drop-zone">
                  Arrastre y suelte su archivo aquí

                <button className="cssbuttons-io-button" onClick={() => document.getElementById('file-upload').click()}>
                    <svg viewBox="0 0 640 512" fill="white" height="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
                    </svg>
                    <span>O seleccionar</span>
                </button>

            </div>

          </div>


          <div>
          {imageData && (
            <div className="imgOne">
            <h3>Preview:</h3>
            <img src={imageData} alt="Uploaded" style={{ maxWidth: '600px' }} />{/*Aqui limitamos el container del preview*/}
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
    <div class="imgTwo">
      <h3>Imagen Redimensionada:</h3>
      <button id="download" className="Download-button" onClick={() => descargarImagen(imagenConvertida, nuevoFormato)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="20"
          viewBox="0 0 640 512"
        >
        <path
        d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
        fill="white"
        ></path>
        </svg>
        <span>Descargar Imagen</span>
        </button>
    <img src={imagenRedimensionada} style={{ maxWidth: '900px' }} />
    <br/>
  </div>
  )}
</div>

      </div> {/*Fin Container2*/}

      
      </div>      
    </div>
  );
}
