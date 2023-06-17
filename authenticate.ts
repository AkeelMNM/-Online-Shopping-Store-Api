import { Request, Response, NextFunction } from 'express';
// import https from 'https';
import http from 'http';
import * as dotenv from 'dotenv';
dotenv.config();

// const rootCas = require('ssl-root-cas').create();
// rootCas.addFile(__dirname + process.env.SSL_ROOT_CA_CERTIFICATE_PATH || '');
// https.globalAgent.options.ca = rootCas;

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const queryParams = {
        host: process.env.AUTHENTICATION_HOST,
        port: process.env.AUTHENTICATION_PORT,
        path: '/user/authenticate',
        method: 'POST',
        headers: { 'Content-type': 'application/json', 'Cookie': req.cookies.jwtToken },
    };

    const sentRequest = http.request(queryParams, (res) => {
        res.setEncoding('utf8');
        res.on('data', (body) => {
            let responseData = JSON.parse(body);

            if (responseData.isVerified) {
                next();
            } else {
                next({ status: 401, message: `Invalid token`, stack: Error().stack })
            }
        })
    });
    sentRequest.end();
}