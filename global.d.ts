declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string
    CORS_ORIGIN: string
    MONGO_URI: string
    PORT: string
    JWT_SECRET: string
    EXPIRES_IN: string
    AWS_ACCESS_KEY_ID: string
    AWS_SECRET_ACCESS_KEY: string
    AWS_REGION: string
    BUCKET_NAME: string
  }
}
