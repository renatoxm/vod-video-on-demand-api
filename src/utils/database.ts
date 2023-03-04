import mongoose from 'mongoose'
import logger from './logger'
import config from '../config'

export async function connectToDatabase() {
  try {
    await mongoose.connect(config.MONGO_URI)
    logger.info('Connect to database')
  } catch (e) {
    logger.error(e, 'Failed to connect to database. Goodbye')
    process.exit(1)
  }
}

export async function disconnectFromDatabase() {
  await mongoose.connection.close()

  logger.info('Disconnect from database')

  return
}
