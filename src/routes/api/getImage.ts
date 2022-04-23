import express from 'express';
import {Request, Response} from 'express';
import {resize} from '../../module/resize'
const image = express.Router();


image.get('/', async (req: Request, res: Response): Promise<void> => {
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);
    const filename = req.query.filename as string | undefined;

    // check if the file name exists
    if (!filename) {
      res.status(400).send( 'you are missing the photo name' );
      return;
    }
    // check if the width is valid
    if (!width || width === 0 || width < 0) {
      res
        .status(400)
        .send('please type a valid width' );
      return;
    }
    //    check if the height is valid
     if (!height || height === 0 || height < 0) {
      res
        .status(400)
        .send('please type a valid height' );
      return;
    }
    // start resizing
    try {
      const outputThumb = await resize(width, height, filename);
      res.sendFile(outputThumb);
    } catch (error) {
      res.status(404).send('required image not found');
    }
  });


export default image;