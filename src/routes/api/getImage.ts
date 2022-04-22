import express from 'express';
import {Request, Response} from 'express';
import  sharp from 'sharp';
import path from 'path';
import { promises as fsPromise } from 'fs';
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
    await fsPromise.access(outputFolderPath);
  } catch (error) {
    await sharp(imageFolderPath).resize(width, height).toFile(outputFolderPath);
  }
  return outputFolderPath;
}
image.get('/', async (req: Request, res: Response): Promise<void> => {
    const width = parseInt(req.query.width as string);
    const filename = req.query.filename as string | undefined;
    const height = parseInt(req.query.height as string);
  
    // check if the file name exists
    if (!filename) {
      res.status(400).send( 'you are missing the photo name' );
      return;
    }
    // check if the width is valid
    if (!width || width === 0) {
      res
        .status(400)
        .send('please type a valid width' );
      return;
    }
    //    check if the height is valid
     if (!height || height === 0) {
      res
        .status(400)
        .send('please type a valid height' );
      return;
    }
    // start resizing
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