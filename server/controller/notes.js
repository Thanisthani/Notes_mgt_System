const Notes = require('../models/Notes')
const { createError } = require('../utils/error')

//fetch particular user's notes

exports.fetchNote = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, process.env.JWT);
        const userId = decodedData?.id;
        
        const notes = await Notes.findById(
            userId
        );
        res.status(200).json(notes);
    }
    catch (err)
    {
        next(createError(400, err));
    }
}

//create notes

exports.createNote = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, process.env.JWT);
        const userId = decodedData?.id;

        const newNote = new Notes({
            title: req.body.title,
            description: req.body.description,
            userid:userId
        })

        res.status(200).json(newNote);
    }
    catch (err)
    {
        next(createError(400, err));
    }
}

// delete note

exports.deleteNote = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User suceesfulky deleted");
    }
    catch (err)
    {
        next(createError(400, err));
    }
}

// update note

exports.updatenote = async (req, res, next) => {
    try {
        const updateNote = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateNote);
    }
    catch (err)
    {
        next(createError(400, err));
    }
}