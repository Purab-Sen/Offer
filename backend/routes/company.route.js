import express from 'express'
import { getCompanyProfile, updatePassword, updateProfile } from '../controllers/company.controller';

const router = express.Router()

router.get("/:username", getCompanyProfile)
router.update("/:username/update", updateProfile)
router.update("/:username/password/update", updatePassword)
router.post("/:username/post/create", updatePassword)
router.update("/:username/post/update", updatePassword)


module.exports = router;