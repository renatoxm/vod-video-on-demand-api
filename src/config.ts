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
  AWS_ACCESS_KEY_ID: string | undefined
  AWS_SECRET_ACCESS_KEY: string | undefined
  AWS_REGION: string | undefined
  BUCKET_NAME: string | undefined
}

interface Config {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
  CORS_ORIGIN: string
  JWT_SECRET: string
  EXPIRES_IN: string
  AWS_ACCESS_KEY_ID: string
  AWS_SECRET_ACCESS_KEY: string
  AWS_REGION: string
  BUCKET_NAME: string
}

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    JWT_SECRET: process.env.JWT_SECRET,
    EXPIRES_IN: process.env.EXPIRES_IN,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION,
    BUCKET_NAME: process.env.BUCKET_NAME,
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
