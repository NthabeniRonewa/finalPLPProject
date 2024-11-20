const express = require('express');
const router = express.Router();
const doctorsController = require('./doctorsController');


router.post('/', doctorsController.addDoctor);
router.get('/', doctorsController.getAllDoctors);
router.put('/', doctorsController.updateDoctor);
router.delete('/', doctorsController.deleteDoctor);

module.exports = router;