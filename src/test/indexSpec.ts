
import {resize} from '../module/resize';
import supertest from 'supertest';

import {app} from '../app';

const req = supertest(app);

// Testing image processing 
describe('Test Resizing the image', (): void => {
    it('expects the file to be resized', async (): Promise<void> => {
      await expectAsync(resize( 300, 200,'a',)).toBeResolved();
    });
    it('expects to throw an error if the file doesnt exist', async (): Promise<void> => {
      await expectAsync(resize( 400, 400,'non-exist-file')).toBeRejected();
    });
  });

// Testing endpoints 
describe('Test endpoints response', (): void => {
  
    // test failure 
    it('gets error if file missing', async (): Promise<void> => {
        const res = await req.get(
          '/api/images?filename=z&width=200&height=200'
        );
        expect(res.status).toBe(404);
      });

      //invalid query testing
      it('gets error if height query is invalid', async (): Promise<void> => {
        const res = await req.get(
          '/api/images?filename=a&width=200&height=0'
        );
        expect(res.status).toBe(404);
      });

      it('gets error if width query is invalid', async (): Promise<void> => {
        const res = await req.get(
          '/api/images?filename=a&width=0&height=300'
        );
        expect(res.status).toBe(404);
      });

      it('gets error if filename query is invalid', async (): Promise<void> => {
        const res = await req.get(
          '/api/images?filename=&width=200&height=300'
        );
        expect(res.status).toBe(404);
      });

});