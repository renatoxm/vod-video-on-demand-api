// import path from 'path'
import dotenv from 'dotenv'

// dotenv.config({ path: path.resolve(__dirname, '../config/config.env') })
dotenv.config()

interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  MONGO_URI: string | undefined
  CORS_ORIGIN: string | undefined
  JWT_SECRET: string | undefined
  EXPIRES_IN: string | undefined
}

interface Config {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
  CORS_ORIGIN: string
  JWT_SECRET: string
  EXPIRES_IN: string
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN,
  }
}

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitzedConfig(config)

export default sanitizedConfig
