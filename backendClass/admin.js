const express = require('express');
const router = express.Router();
const adminController = require('./adminController');

router.get('/', adminController.getAdminInfo);
router.get('/', adminController.getAllPatients);
router.delete('/', adminController.deletePatient);

module.exports = router;