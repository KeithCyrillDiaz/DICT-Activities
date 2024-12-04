import React, {useState} from "react";
import {useParams} from 'react-router-dom'
import { Based_API } from "../Constants/constants";

const ReservationForm = () => {

    const {id} = useParams();
    const [reservationDetails, setReservationDetails] = useState({
        checkInDate: '',
        checkOutDate: '',
        message: ''
    })
    
    const updateReservationDetails = (field, value) => {
        setReservationDetails({
            ...reservationDetails,
            [field]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`details: ${JSON.stringify(reservationDetails, null, 2)}`)
        const token = localStorage.getItem('token');
        try {
            const response = await fetch(
                `${Based_API}/api/rooms/reservations/create`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        roomId: id,
                        checkInDate: reservationDetails.checkInDate,
                        checkOutDate: reservationDetails.checkOutDate
                    })
                }
            )

            if(!response.ok) {
                const error = await response.json();
                updateReservationDetails('message', `Error: ${error.message}`)
                return
            }
            console.log("Reservation Created Successfully")
            setReservationDetails({
                message: "Reservation Created Successfully",
                checkInDate: '',
                checkOutDate: ''
            })
        } catch (error) {
            console.error("Error: ", error)
        }
    }
    return (
        <div className="container">
            <h1>Reservation Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="checkInDate" className="form-label">
                    Check-In Date
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="checkInDate"
                    value={reservationDetails.checkInDate}
                    onChange={(e) => updateReservationDetails('checkInDate', e.target.value)}
                    required
                />
                </div>
                <div className="mb-3">
                <label htmlFor="checkOutDate" className="form-label">
                    Check-Out Date
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="checkOutDate"
                    value={reservationDetails.checkOutDate}
                    onChange={(e) => updateReservationDetails('checkOutDate', e.target.value)}
                    required
                />
                </div>
                <button type="submit" className="btn btn-primary">
                Reserve
                </button>
            </form>
         </div>
    )
}

export default ReservationForm;