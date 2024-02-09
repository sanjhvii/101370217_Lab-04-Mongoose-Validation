const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/UsersRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://sanjhvii:amipapa23@cluster0.hlgwu88.mongodb.net/labTest_01_chat_app?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


app.use(userRouter);

app.listen(4000, () => { console.log('Server is running...') });