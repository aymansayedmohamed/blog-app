import * as winston from "winston";

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: "info",
      handleExceptions: true,
      json: false,
      colorize: true
    })
  ],
  exitOnError: false
});