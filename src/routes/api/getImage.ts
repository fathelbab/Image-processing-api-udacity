import express from 'express';
import {Request, Response,NextFunction} from 'express';
import fs from 'fs'; 
import  sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';
const image = express.Router();

const resizeImage = async  (
    width: number,
    height: number,
  imgName: string,
): Promise<string> => {
  const outputFolderPath = path.join( __dirname,'..','..','thumb', `${imgName}${width}x${height}.jpg`);
  const imageFolderPath = path.join( __dirname,'..','..','full',`${imgName}.jpg`);
  console.log('=====>',outputFolderPath)

  try {
    await fsPromises.access(outputFolderPath);
  } catch (error) {
    await sharp(imageFolderPath).resize(width, height).toFile(outputFolderPath);
  }
  return outputFolderPath;
}
image.get('/', async (req: Request, res: Response): Promise<void> => {
    const filename = req.query.filename as string | undefined;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
  
    if (!filename) {
      res.status(400).send( 'you are missing the photo name' );
      return;
    }
    if (!(width >= 0)) {
      res
        .status(400)
        .send('please type a valid width' );
      return;
    }
    if (!(height >= 0)) {
      res
        .status(400)
        .send('please type a valid height' );
      return;
    }
  
    try {
      const outputThumb = await resizeImage(width, height, filename);
      console.log('finding image')
      res.sendFile(outputThumb);
    } catch (error) {
      console.log(error)
      res.status(404).send(' required image not found');
    }
  });


export default image;