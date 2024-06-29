import sharp from 'sharp';
import { NextResponse } from 'next/server';

//si la imagen supera los 10mb no deja subirla
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', 
    },
  },
};

export async function POST(request) {
  try {
    const { imagenURL, nuevoFormato } = await request.json();

    if (!imagenURL || !nuevoFormato) {
      throw new Error('Missing required parameters');
    }

    // Decodificar la imagen base64
    const buffer = Buffer.from(imagenURL.split(',')[1], 'base64');

    // Convertir la imagen al nuevo formato
    const convertedBuffer = await sharp(buffer)
      .toFormat(nuevoFormato)
      .toBuffer();

    // Codificar la imagen convertida en base64
    const base64Image = `data:image/${nuevoFormato};base64,${convertedBuffer.toString('base64')}`;

    // retorna la imagen con el formato nuevo
    return NextResponse.json({ imagenConvertida: base64Image });
  } catch (error) {
    console.error('Error al convertir el formato de la imagen:', error);
    return NextResponse.json({ error: 'Error al convertir el formato de la imagen', details: error.message }, { status: 500 });
  }
}