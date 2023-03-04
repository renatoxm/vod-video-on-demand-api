import jwt from 'jsonwebtoken'
import config from '../config'

const JWT_SECRET = config.JWT_SECRET
const EXPIRES_IN = config.EXPIRES_IN

export function signJwt(payload: string | Buffer | object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: EXPIRES_IN,
  })
}

export function verifyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    return decoded
  } catch (e) {
    return null
  }
}
