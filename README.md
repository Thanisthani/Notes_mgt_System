
# Notes management system (MERN)

Notes Management System is developed using MERN Stack to maintain the notes properly 
by students. 
## Features

- Student can view ,update ,delete notes 
- Admin can view users' details
- Admin can search user
- Email verification
- List pagination


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO`=  Your mongo Atlas url

`JWT`= Secret key 

`BASE_URL`= http://localhost:port/

`SERVICE` = Mail service provider (gmail)

`USER` = Your mail ID




## Database Seed

-The seed command will create an admin user in the database

```bash
cd server
npm run seed 
  
```
    
# # DOCKER

Notes_mgt_system  is fully usable with docker, it integrate the MongoDB database, the React frontend and NodeJS/Express backend

[If you do not have docker:] (https://docs.docker.com/get-docker/)

Docker allows to deloy the app in docker containers in one line in the CLI.


## Deployment

in the root directory:

```bash
docker-compose up --build
```
It supports hot reloading for both the frontend and backend.

The App should be App :

visit client : http://localhost:3000

visit server : http://localhost:8800

## Languages & Tools

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**DB:** Mongo Atlas , mongoose


