// IMPORT ROUTER EXPRESS
const router = require('express').Router();
// IMPORT CONTROLLER MOVIES
const { employeeShow, employeeAdd, employeeUpdate, employeeDelete } = require('../controller').controllerEmployee;

// router untuk show semua karyawan
router.get('/employee', employeeShow);

// router untuk add karyawan
router.post('/employee', employeeAdd);

// router untuk update karyawan
router.put('/employee/:id', employeeUpdate);

// router untuk delete karyawan
router.delete('/employee/:id', employeeDelete);

module.exports = router;