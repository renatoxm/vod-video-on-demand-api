import express from 'express'
import { processRequestBody } from 'zod-express-middleware'
import { loginHandler } from '../controllers/auth.controller'
import { loginSchema } from '../schemas/auth.schema'

const router = express.Router()

router.post('/', processRequestBody(loginSchema.body), loginHandler)

export default router
