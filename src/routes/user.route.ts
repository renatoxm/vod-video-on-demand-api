import express from 'express'
import { processRequestBody } from 'zod-express-middleware'
import requireUser from '../middleware/requireUser'

import { registerUserHandler } from '../controllers/user.controller'
import { registerUserSchema } from '../schemas/user.schema'

const router = express.Router()

router.get('/', requireUser, (req, res) => {
  return res.send(res.locals.user)
})

router.post('/', processRequestBody(registerUserSchema.body), registerUserHandler)

export default router
