const express = require('express')
const routes = require("./routes");
const app = express();
//const path = require('path');
const port = process.env.PORT || 3001;
//http://localhost:3001/

//middlewares
app.use(express.json());

app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });
  
// const publicDirectory = path.join(__dirname,'public');
// app.use(express.static(publicDirectory));
// //HTML ROUTES
// //home page
// app.get('/',(req,res) =>{
//     res.sendFile(path.join(publicDirectory, 'index.html'));
// });
// //notes page
// app.get('/notes',(req,res) =>{
//     res.sendFile(path.join(publicDirectory, 'notes.html'));
//     //should read the db.json file and return all saved notes as JSON
// });
// //API ROUTES
// //GET /api/notes
// app.get('/api/notes',(req,res) =>{
//     //should read the db.json file and return all saved notes as JSON
// });
// //GET /api/notes/:id
// app.get('/api/notes/:id',(req,res) =>{
//     //should read the db.json file and return all saved notes as JSON
// });
// //POST /api/notes
// app.post('/api/notes',(req,res) =>{
//     //should receive a new note to save on the request body, add it to the db.json file,
//     //and then return the new note to the client. You'll need to find a way to give each note 
//     //a unique id when it's saved (look into npm packages that could do this for you).

// });
// //DELTE /api/notes
// app.delete('/api/notes/:id',(req,res) =>{
//     //should receive a query parameter containing the id of a note to delete. 
//     //In order to delete a note, you'll need to read all notes from the db.json file,
//     //remove the note with the given id property, and then rewrite the notes to the db.json file.
// });
// /*
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });
// */
