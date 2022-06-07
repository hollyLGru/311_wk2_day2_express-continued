const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contacts')

router.get('/contacts');

router.get("/contacts", contactController.list);
// shows all contacts
router.get("/contacts/:id", contactController.show);
// shows contact be id
router.post("/contacts", contactController.create);
// POST route to create a new contacts 

// exports the routers
module.exports = router; 