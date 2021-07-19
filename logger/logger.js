
import winston from 'winston'

const logger = winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: 'combined.log',
      level: 'info'
    }),
    new winston.transports.File({
      filename: 'error.log',
      level: 'error'
    })
  ]
});

  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));

  export {logger}