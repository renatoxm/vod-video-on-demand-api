/* eslint-disable indent */
import pino from 'pino'
import config from '../config'

const isDevelopment = config.NODE_ENV === 'development'

const logger = isDevelopment
  ? pino({
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
        },
      },
    })
  : pino()

export default logger
