const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

const app = express();

app.use(express.json());
app.use(cors());

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
  app.use('/blog/users', userRouter);
  app.use('/blog/posts', postRouter);

  const port = process.env.PORT || 3000;
  app.listen(port);
  app.get('/', (req, res) => res.send("Day 17 Blog Backend"))

  console.log(`server running at port ${port}`);