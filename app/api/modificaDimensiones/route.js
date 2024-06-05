import sharp from 'sharp';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { ancho, alto, imagenURL } = await req.json();

    const parts = imagenURL.split(',');
    
    const imagenBuffer = Buffer.from(parts[1], 'base64');
    const imagenRedimensionadaBuffer = await sharp(imagenBuffer)
      .resize(ancho, alto, {
        fit:  "inside"
      })
      .toBuffer();

    return NextResponse.json({ 
      imagenRedimensionada: `data:image/jpeg;base64,${imagenRedimensionadaBuffer.toString('base64')}` ,
      ancho: {ancho},
      alto: {alto}
    });
  } catch (err) {
    console.error('Error al redimensionar la imagen:', err);
    return NextResponse.json({ error: err.message || 'Error al redimensionar la imagen' }, { status: 500 });
  }
}