const express = require('express');
const subPlatformController = require('../controllers/subPlatformController');

const router = express.Router();

router.route('/').get(subPlatformController.getAllSubPlatform).post(subPlatformController.createSubPlatform);
router.get('/sendMail', subPlatformController.sendMail);
module.exports = router;
