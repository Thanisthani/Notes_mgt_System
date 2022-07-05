const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) =>
{
    console.log("something" ,req.headers)
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            let decodedData = jwt.verify(token, process.env.JWT);

            res.userId = decodedData?.id;
            res.role = decodedData?.accountType;

            next();
        }
        else {
            res.status(404).json(req.headers);
        }
    }
    catch (error)
    {
        console.log(error);
    }
  
    
}

exports.authRole = (role) => {
    try {
        
    } catch (err)
    {
        console.log(error);
    }
}