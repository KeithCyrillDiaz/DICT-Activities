const mongoose = require('mongoose');
const express = require('express');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');
const roomRoutes = require('./routes/roomRoutes');
const roomReservations = require('./routes/reservationRoutes');
const cors = require('cors');

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

  const app = express()

  app.use(express.json());

  app.get('/', (req, res) => res.json({message: "Day 21 Backend"}));

  app.use(errorHandler);
  app.use(cors());
  app.use('/api/users', userRoutes);
  app.use('/api/rooms', roomRoutes);
  app.use('/api/rooms/reservations', roomReservations);

  const port = process.env.PORT || 3000;
  app.listen(port, function () {
    console.log("Server is Running at port ", port)
  });