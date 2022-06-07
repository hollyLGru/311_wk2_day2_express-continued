const express = require('express');
const router = express.Router();
const vehiclesController = require('../controllers/vehicles')

router.get('/vehicles');
router.get('/vehicles', vehiclesController.list);
// route to see all the vehicles
router.get('/vehicles/:id', vehiclesController.show);
// route to see vehicles by ID number
router.post('/vehicles', vehiclesController.create);
// post route for new vehicles

module.exports = router;