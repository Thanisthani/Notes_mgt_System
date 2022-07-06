const express = require('express');
const router = express.Router();

const { fetchNote, createNote, deleteNote, updatenote, getNote } = require("../controller/notes");

const {auth, authRole} = require("../middleware/auth"); //middleware

// fecth notes

router.get("/get", auth,authRole("User") ,fetchNote);

// create note

router.post("/",auth,authRole("User") , createNote);

// delete note

router.delete("/delete/:id", auth,authRole("User") ,deleteNote);

// update note
router.put("/update/:id",auth,authRole("User") , updatenote);

//  get note

router.get("/get/:id",auth,authRole("User") , getNote);

module.exports = router; 