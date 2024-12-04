import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const Based_API = 'http://localhost:3001'
const RoomList = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                const response = await fetch(
                    `${Based_API}/api/rooms/`,
                )
                const data = await response.json();
                console.log("data: ", data);
                setRooms(data.rooms);
            } catch (error) {
                console.error("Error Fetching State: ", error)
                return
            }
        }

        fetchRooms();
    },[])
    
    return(
        <div className="container">
            <h1>Rooms</h1>
            <div className="row">
                {rooms.map((room) => {
                    const {_id, type, description, pricePerNight} = room;
                    return(
                        <div className="col-md-4 mb-4" key={_id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{type}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">Price per night: {pricePerNight}</p>
                                    <Link to={`/rooms/${_id}`} className="btn btn-primary">
                                    View Details
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default RoomList