const sharp = require('sharp');
import { useState } from "react";

const modificarDimensiones = (ancho, alto, inputImagePath, outputImagePath) => {
    sharp(inputImagePath)
    .resize(ancho, alto)
    .toFile(outputImagePath, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Imagen redimensionada correctamente:', info);
    }
  });
    return outputImagePath
}