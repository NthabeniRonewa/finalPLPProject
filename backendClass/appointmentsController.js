const pool = require('./app');

exports.getAllAppointments = (res)=>{
   pool.query('SELECT * FROM Appointments' , (error , results) => {
    if(error ){
        return res.status(500).json({error: error.message});
    }
    res.json(results);
   });
};

exports.createAppointment = (req , res) => {
    const { id, patient_id, doctor_id, appointment_date, appointment_time, status } = req.body;

    if (!patient_id || !doctor_id || !appointment_date || !appointment_time) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    pool.query('INSERT INTO Appointments (id, patient_id, doctor_id, appointment_date, appointment_time, status) VALUES (? , ? ,? ,? ,? ,?)', 
    [id, patient_id, doctor_id, appointment_date, appointment_time, status], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.status(201).json({ id: results.insertId });
    });
};

exports.getPatientAppointments = (req, res) => {
    const patientId = req.session.patientId;
    
    if (!patientId) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    pool.query('SELECT * FROM Appointments WHERE patient_id = ? AND status != ?', [patientId, 'canceled'], (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
};

exports.updateAppointment = (req, res) => {
    const { id, appointment_date, appointment_time, status } = req.body; 

    if (!id || !appointment_date || !appointment_time) {
        return res.status(400).json({ message: 'ID, appointment date, and appointment time are required' });
    }

    pool.query('UPDATE Appointments SET appointment_date = ?, appointment_time = ?, status = ? WHERE id = ?',
    [appointment_date, appointment_time, status, id],
    (error) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json({ message: 'Appointment updated successfully' });
    });
};