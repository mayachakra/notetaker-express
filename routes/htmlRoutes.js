const express = require('express');
const router = require("express").Router();
const path = require('path');

const publicDirectory = path.join(__dirname,'../public');
router.use(express.static(publicDirectory));

//HTML ROUTES
//home page
router.get('/',(req,res) =>{
    res.sendFile(path.join(publicDirectory, 'index.html'));
});
//notes page
//maybe change to /api/notes
router.get('/notes',(req,res) =>{
    res.sendFile(path.join(publicDirectory, 'notes.html'));
    //should read the db.json file and return all saved notes as JSON
});

module.exports = router;