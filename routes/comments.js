const express = require('express');
const router = express.Router();
// creates a new router object

const commentsController = require('../controllers/comments')
router.get("/comments");
router.get("/comments", commentsController.list);
router.get("/comments/:id", commentsController.show);
router.post("/comments", commentsController.create);
// POST route to create a new comment 

// exports the routers
module.exports = router; 