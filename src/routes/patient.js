const express = require('express');

const router = express.Router();
const { exist } = require('../middleware/auth');
const { auth } = require('../middleware/auth');
const patient = require('../controller/patient').ADdpatient;
const { Deletepatient } = require('../controller/patient');
const { FindPatient } = require('../controller/patient');
const { UpdadtePatient } = require('../controller/patient');
const { Count } = require('../controller/patient');
const { AddMed } = require('../controller/patient');
const { AddTest } = require('../controller/patient');
const { GetMed } = require('../controller/patient');
const { GetTests } = require('../controller/patient');
const { CountMed } = require('../controller/patient');
const { CountTests } = require('../controller/patient');
const { UpdateMed } = require('../controller/patient');
const { UpdateTest } = require('../controller/patient');
const { reservation } = require('../controller/patient');
const { Confirmreservation } = require('../controller/patient');
const { Getreservations } = require('../controller/patient');
const { Deletereservation } = require('../controller/patient');
const { Cancelreservation } = require('../controller/patient');
const { FindpatientByid } = require('../controller/patient');
const { Deletemed } = require('../controller/patient');
const { parser } = require('../middleware/fileupload');
const {checkValidationResult,validate} =require('../middleware/validator')


router.delete('/Deletemed', Deletemed);
router.post('/AddPatient', patient);
router.get('/FindpatientByid', FindpatientByid);
router.delete('/DeletePatient', Deletepatient);
router.get('/FindPatient', FindPatient);
router.patch('/UpdadtePatient', UpdadtePatient);
router.get('/Count', Count);
router.post('/AddMed', AddMed);
router.post('/AddTest',parser, AddTest);
router.get('/GetMed', GetMed);
router.get('/GetTests', GetTests);
router.get('/CountMed', CountMed);
router.get('/CountTests', CountTests);
router.patch('/UpdateMed', UpdateMed);
router.patch('/UpdateTest', UpdateTest);
router.post('/Reservation', reservation);
router.patch('/ConfirmReservation', Confirmreservation);
router.get('/GetReservations', Getreservations);
router.patch('/Cancelreservation', Cancelreservation);
router.delete('/Deletereservation', Deletereservation);

module.exports = router;
