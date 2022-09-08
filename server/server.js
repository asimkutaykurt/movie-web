const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userController = require('./controllers/user');
const cors = require('cors');
const PORT = 4000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://asimkutaykurt:uDJbswrMFhWvmgmb@cluster0.43q4vbz.mongodb.net/test', (err, success) => {
    if(err) {
        console.log('DB connection failed!');
    } else {
        console.log('DB connection success!');
    }
});

app.post('/signup', userController.signup)
app.post('/signin', userController.signin)
app.post('/submit-otp', userController.submitotp)
app.post('/send-otp', userController.sendotp)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})