import path from 'path'
import { promises as fsPromise, } from 'fs';
import fs from 'fs';
import  sharp from 'sharp';

export  const resize = async  (
    width: number,
    height: number,
  imgName: string,
): Promise<string> => {
  const outputFolderPath = path.join( __dirname,'..','..','thumb', `${imgName}${width}x${height}.jpg`);
  const imageFolderPath = path.join( __dirname,'..','..','full',`${imgName}.jpg`);

  try {
      const outPutPath = path.join( __dirname,'..','..','thumb')

      if(!fs.existsSync(outPutPath)) {
          fs.mkdirSync(path.join(__dirname,'..','..','thumb'));
      }
    await fsPromise.access(outputFolderPath);
  } catch (error) {
    await sharp(imageFolderPath).resize(width, height).toFile(outputFolderPath);
  }
  return outputFolderPath;
}