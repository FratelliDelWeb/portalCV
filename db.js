const Mongoose = require("mongoose")
const mongoDB = `mongodb+srv://ijapdb:JG57Cr2IzYLvktVz@cluster0.hl38nut.mongodb.net/?retryWrites=true&w=majority`
const connectDB = async () => {
  await Mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB Connected");
};
module.exports = connectDB;
