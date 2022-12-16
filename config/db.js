
const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect('mongodb+srv://kaydot:kaydot13@cluster0.fkkykwc.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("mongoDb connected");
};
module.exports = connectDb;

