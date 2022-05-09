const express = require('express');
const app = express();

const platformRouter = require('./routes/subRoute');
const userRouter = require('./routes/userRoute');

app.use(express.json());

app.use('/api/v1/plateforms', platformRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
