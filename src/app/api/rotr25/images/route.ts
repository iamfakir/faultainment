import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/rotr25/images');
  
  try {
    const imageFilenames = fs.readdirSync(imagesDirectory);
    return NextResponse.json({ images: imageFilenames });
  } catch (error) {
    console.error('Could not read images directory:', error);
    return NextResponse.json({ error: 'Error loading images.' }, { status: 500 });
  }
}