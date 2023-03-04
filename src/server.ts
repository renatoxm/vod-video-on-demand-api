import app from './app'
import logger from './utils/logger'
import config from './config'
import { connectToDatabase, disconnectFromDatabase } from './utils/database'

const PORT = config.PORT

const server = app.listen(config.PORT, async () => {
  await connectToDatabase()
  logger.info(`server listenning at http://localhost:${config.PORT}`)
})

server.on('error', (error: Error) => {
  logger.error(`Server error: ${error.message}`)
})

const signals = ['SIGTERM', 'SIGINT']

async function gracefulShutdown(signal: string) {
  logger.info(`Received ${signal}. Starting graceful shutdown...`)
  await server.close()
  await disconnectFromDatabase()
  logger.info('Server disconnected. Shutting down.')
  process.exit(0)
}

for (const signal of signals) {
  process.on(signal, () => {
    gracefulShutdown(signal).catch(error => {
      logger.error(`Error during graceful shutdown: ${error.message}`)
      process.exit(1)
    })
  })
}
