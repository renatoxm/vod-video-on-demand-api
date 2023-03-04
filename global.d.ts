declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    CORS_ORIGIN: string
    MONGO_URI: string
    PORT: string
    JWT_SECRET: string
    EXPIRES_IN: string
  }
}
