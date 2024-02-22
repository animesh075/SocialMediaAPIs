// import fs from 'fs';

// const fsPromise = fs.promises;
import winston from "winston";

// async function log(logData) {
//   try {
//     logData = `\n ${new Date().toString()} - ${logData}`;
//     await fsPromise.appendFile(
//       'log.txt',
//       logData
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

// Create a Winston logger configuration
export const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs.txt' })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
});

const loggerMiddleware = async (
  req,
  res,
  next
) => {
  // 1. Log request body.
  if (!req.url.includes('signin')) {
    // const logData = `${
    //   req.url
    // } - ${JSON.stringify(req.body)}`;
    // await log(logData);
    logger.info({
      timestamp: new Date(),
      method: req.method,
      originalUrl: req.originalUrl,
      body: req.body
    });
  }
  next();
};

export default loggerMiddleware;
