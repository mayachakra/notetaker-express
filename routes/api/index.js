const express = require('express'); //make sure other index.js has
const router = require("express").Router();
const notesRoutes = require("./notesRoutes");

// router.use(express.json()); //make sure other index.js has
router.use('/notes', notesRoutes);

module.exports = router;