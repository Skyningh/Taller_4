import { IncomingForm } from 'formidable';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import os from 'os';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const uploadDir = path.join(os.tmpdir(), 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const form = new IncomingForm({
    multiples: false,
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error al procesar el formulario:', err);
      return res.status(500).json({ error: 'Error al procesar el formulario' });
    }

    try {
      console.log('Campos recibidos:', fields);
      console.log('Archivos recibidos:', files);

      const imageFile = Array.isArray(files.image) ? files.image[0] : files.image;
      const ancho = Array.isArray(fields.ancho) ? fields.ancho[0] : fields.ancho;
      const alto = Array.isArray(fields.alto) ? fields.alto[0] : fields.alto;

      if (!imageFile) {
        throw new Error('No se recibió ninguna imagen');
      }

      if (!ancho || !alto) {
        throw new Error('Falta ancho o alto');
      }

      console.log('Ruta del archivo:', imageFile.filepath);

      const inputBuffer = await fs.readFile(imageFile.filepath);

      const outputBuffer = await sharp(inputBuffer)
        .resize({ width: Number(ancho), height: Number(alto) })
        .toBuffer();

      res.setHeader('Content-Type', 'image/jpeg');
      res.send(outputBuffer);

      // Limpia el archivo temporal
      await fs.unlink(imageFile.filepath);
    } catch (error) {
      console.error('Error al manipular la imagen:', error);
      res.status(500).json({ error: error.message });
    }
  });
}