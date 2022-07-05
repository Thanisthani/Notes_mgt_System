

const mongoose = require("mongoose");

const { Schema } = mongoose;

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    description: {
        type: String,
        require:true
    },
    userid: {
        type: Number,
        require:true
    },
    
});

module.exports = mongoose.model("Notes", NoteSchema);