const mongoose = require('mongoose');
const User = require('./models/User');

// mongoDB 
mongoose.connect(process.env.MONGO)
    .then(() =>
    {
        console.log('Mongo connection open !!');
    })
    .catch((err) => {
        console.log(err);
    });

const seedUser = new User(
    {
        email: "admin@gmail.com",
        password: "1234",
        accountType: "Admin",
        dateOfBirth: 2022 - 07 - 06,
        firstname: "Main",
        lastname: "Admin",
        mobile: 94771234567
    }
);


const seedDB = async () => {
    await seedUser.save()
    
}; 

seedDB().then(() => {
    mongoose.connection.close();
});
  