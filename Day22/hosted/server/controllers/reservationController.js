const Reservation = require('../models/reservation');
const Room = require('../models/room');

const createReservation = async (req, res, next) => {
    try {
        const {roomId, checkInDate, checkOutDate} = req.body;
        const room = Room.findById(id);
        if(!room) {
            return res.status(404).json({message: 'Room not Found'});
        }

        const numberOfNights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / 1000 *60 *60 *24);
        const totalAmount = numberOfNights * room.pricePerNight;

        const reservation = new Reservation({
            roomId,
            checkInDate,
            checkOutDate,
            totalAmount,
            user: req.userId
        });

        const result = await reservation.save();

        if(result)res.status(200).json({message: 'Room Created Successfully', result})



    } catch (error) {
        next(error);
    }
}


module.exports = {
    createReservation
}