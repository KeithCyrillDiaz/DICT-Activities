const Room =require('../models/room');


const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({message: "Retrieve All Rooms"});
    } catch (error) {
        next(error);
    }
}


const getRoomById = async (req, res, next ) => {
    try {
        const {id } = req.params;
        const room = await Room.findById(id)

        if(!room) {
            return res.status(404).json({message: 'Room not Found'});
        }

        return res.status(200).json({message: "Retrieve Room Successfully", room})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllRooms,
    getRoomById
}