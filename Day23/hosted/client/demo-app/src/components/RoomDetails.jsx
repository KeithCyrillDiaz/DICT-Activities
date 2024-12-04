import React, {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom';
import { Based_API } from '../Constants/constants';

const RoomDetails = () => {
    const {id} = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await fetch(`${Based_API}/api/rooms/${id}`)
                const data = await response.json();
                setRoom(data.room)
            } catch (error) {
                console.error('Error: ', error)
            }
        }

        fetchRoomDetails();
    },[id])

    if(!room) {
        return (
            <div>Loading...</div>
        )
    }
    
    return(
        <div className="container">
            <div className='col-md-4 mb-4'>
                <div className="card">
                    <div className="card-body">
                    <h1 className='card-title'>{room.type}</h1>
                    <p className='card-text'>Room ID: {room.roomId}</p>
                    <p className='card-text'>Hotel ID: {room.hotelId}</p>
                    <p className='card-text'>Capacity: {room.capacity}</p>
                    <p className='card-text'>Availability: {room.availability}</p>
                    <p className="card-text">Price per night: {room.pricePerNight}</p>
                    <Link to={`/reservation/${room._id}`} className="btn btn-primary">
                        Reserve Room
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomDetails;

