const jwt = require('jsonwebtoken');

const auth = async (req, res, next) =>
{
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1];
            let decodedData = jwt.verify(token, process.env.JWT);

            res.userId = decodedData?.id;
            res.role = decodedData?.accountType;


            next();
        }
        else {
            res.status(404).json("token not found");
        }
    }
    catch (error)
    {
        console.log(error);
    }
  
    
}

function authRole(role) {
    return (req, res, next) => {
        if (res.role != role) {

        res.status(401)
        return res.send('Not allowed')
        }

  
      next()
    }
}
  

module.exports = {
    auth,
    authRole
  }