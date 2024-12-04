const mongoose = require('mongoose');


const reservationSchema = new mongoose.Schema({
    roomId: {type: String, required: true, ref: 'Room'},
    checkInDate: {type: Date, required: true},
    checkOutDate: {type: Date, required: true},
    totalAmount: {type: Number, required: true},
    // paymenIntentId: {type: String, required: true},
    user:{type: mongoose.Schema.Types.ObjectId, required: true}
}, {timestamps: true})

const Reservation = mongoose.model('reservation', reservationSchema);
module.exports = Reservation;