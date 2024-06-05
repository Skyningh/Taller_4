import { useState } from 'react';

//esta funcion esta creada para obtener el URL de la imagen y mostrar su vista previa 
const useImagenUploader = () =>{
    const[imageData, setImage] = useState(null);
    
    const handleImageUpload = (file) =>{
        //creamos una promesa que retorna resolve si se cumple y reject si no
        return new Promise((resolve, reject) =>{
            //si no hay un archivo entonces va al reject, ocurre esto y no retornamos nada
            if (!file){
                reject ('archivo no subido')
                return
            }
            //si hay un archivo entonces esta el resolve 
            //creamos un Filereader para leer el archivo
            const reader = new FileReader();
            //este evento sucede cuando todo se completa con exito. obteniendo la URL (e.target.result)
            //actualizando el estado de setImage
            reader.onload = (e) =>{
                const imageUrl = e.target.result;
                setImage(imageUrl);
                resolve(imageUrl);
            };
            //este evento sucede cuando ocurre un error en la lectura del archivo
            reader.onerror = (error) => {
                reject (error);
            };
            reader.readAsDataURL(file);
        });
    };
    return {imageData, handleImageUpload};
};

export default useImagenUploader;