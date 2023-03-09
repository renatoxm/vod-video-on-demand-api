import express from 'express'
import requireUser from '../middleware/requireUser'
import { findVideosHandler, streamVideoHandler, updateVideoHandler, uploadVideoS3Handler } from '../controllers/video.controller'
const router = express.Router()

router.post('/', requireUser, uploadVideoS3Handler)

router.patch('/:videoId', requireUser, updateVideoHandler)

router.get('/:videoId', streamVideoHandler)

router.get('/', findVideosHandler)

export default router
