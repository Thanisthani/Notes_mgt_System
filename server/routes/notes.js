const express = require('express');
const router = express.Router();

const { fetchNote,createNote,deleteNote,updatenote,getNote } = require("../controller/notes");

// fecth notes

router.get("/get", fetchNote);

// create note

router.post("/", createNote);

// delete note

router.delete("/delete/:id", deleteNote);

// update note
router.put("/update/:id", updatenote);

//  get note

router.get("/get/:id", getNote);

module.exports = router; 