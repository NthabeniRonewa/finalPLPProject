const express = require('express');
const router = express.Router();
const appointmentsController = require('./appointmentsController');

router.get('/', appointmentsController.getAllAppointments);
router.post('/', appointmentsController.createAppointment);
router.get('/', appointmentsController.getPatientAppointments);
router.put('/', appointmentsController.updateAppointment);

module.exports = router;