console.log("This is Express");
require('dotenv').config();
const mongoose = require('mongoose');
const express = require ('express');
const todoRoutes = require('./routes/todoRoutes')

const app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send("Day 16 Backend")
});

const connectToDatabase = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connect to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };

  connectToDatabase();
  app.use('/todos', todoRoutes);
  
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`server running at port ${port}`);
