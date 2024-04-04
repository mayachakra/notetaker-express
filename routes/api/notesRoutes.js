const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const {v4:uuidv4} = require('uuid');
//npm install uuid

const filePath = path.join(__dirname, "../../db/db.json");

//READ
function readFromFile(){
    // const filePath = path.join(__dirname, "../db.json");
    return fs.readFileSync(filePath, "utf8");
}
//WRITE
function writeToFile(data){
    // const filePath = path.join(__dirname, "../db.json");
    fs.writeFileSync(filePath, data, "utf8");
}

//API ROUTES
//GET /api/notes
router.get('/',(req,res) =>{
    //should read the db.json file and return all saved notes as JSON
    try{
        const notesData = readFromFile();
        res.json(JSON.parse(notesData));

    }catch(error){
        console.error(error)
        res.status(500).json({message:"Server Error"});
    }

});
//GET /api/notes/:id
router.get('/:id',(req,res) =>{
    const notesData = readFromFile(); //read from db
    const notes = JSON.parse(notesData); //parse as json
    const note = notes.find(note => note.id === req.params.id); //to find that specific id
    if(note){
        res.json(note);
    } else{
        res.status(404).json({message:"Note not found"});

    }
    //should read the db.json file and return all saved notes as JSON
});
//POST /api/notes
router.post('/',(req,res) =>{
    //should receive a new note to save on the request body, add it to the db.json file,
    //and then return the new note to the client. You'll need to find a way to give each note 
    //a unique id when it's saved (look into npm packages that could do this for you).
    try{
        const newNote = req.body;
        newNote.id = uuidv4(); //implement uuid package
        const notesData = readFromFile(); //read from db
        const notes = JSON.parse(notesData); //parse as json
        notes.push(newNote); //pushes newNote to array of notes
        writeToFile(JSON.stringify(notes)); //writes updated array to db.json
        res.json(newNote);

    }catch(error){
        res.status(500).json({message:"Server Error"});
    }


});
//DELTE /api/notes
router.delete('/:id',(req,res) =>{
    try{
        const noteID = req.params.id;
        //should receive a query parameter containing the id of a note to delete. 
        const notesData = readFromFile();
        //In order to delete a note, you'll need to read all notes from the db.json file,
        let notes = JSON.parse(notesData);
        notes = notes.filter(note => note.id !== noteID); //to filter based on that specific id
        //remove the note with the given id property, and then rewrite the notes to the db.json file.
        writeToFile(JSON.stringify(notes));
        res.json({message: "Note Deleted"});
    }catch(error){
        res.status(500).json({message:"Server Error"});
    }
});
module.exports = router;
