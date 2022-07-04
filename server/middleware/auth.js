const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) =>
{
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData = jwt.verify(token, process.env.JWT);

        res.userId = decodedData?.id;

        next();
    }
    catch (error)
    {
        console.log(error);
    }
  
    
}