import {server} from './server';
import 'dotenv/config';

// parse the port from .env file
const port = process.env.PORT || 3000;
// start the server
server.listen(port, () => {console.log(`Server is running on port ${port}`)});
