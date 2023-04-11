import https from 'https';
import fs from 'fs';
import app from './app';

const key = fs.readFileSync(process.env.SSL_CERTIFICATE_PRIVATE_KEY_PATH || '');
const cert = fs.readFileSync(process.env.SSL_CERTIFICATE_PATH || '');

/**
 * Creating Https server
 */
const server = https.createServer({ key, cert }, app);

/**
 * Assign in Port
 */
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is listening on port ${port}....`);
})