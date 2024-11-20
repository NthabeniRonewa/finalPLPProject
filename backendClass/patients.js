const express = require('express');
const router = express.Router();
const patientsController = require('./patientsController');

router.post('/', patientsController.registerPatient);
router.post('/', patientsController.loginPatient);
router.post('/', patientsController.logoutPatient);
router.put('/', patientsController.updatePatientProfile);
router.get('/', patientsController.getAllPatients);
router.delete('/', patientsController.deletePatient);



module.exports = router;