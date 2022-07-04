import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();


// middleware

app.use(express.json());

app.use(cors());