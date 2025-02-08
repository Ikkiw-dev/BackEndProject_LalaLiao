import * as Booking from "../models/bookingModels.js"

export const createBooking = async (req,res) => {
    try {
        const {Building_ID, username, user_role, start_booking_date, start_time, end_time, description} = req.body;
        const bookingId = await Booking.Bookingcreate(Building_ID, username, user_role, start_booking_date, start_time, end_time, description);
        return res.status(201).json({bookingId, message : "Booking is Created"})
    } catch(error) {
        console.log("Error, ", error);
        
        return res.status(500).json({message : "Error creating schedule", error})
    }
}

export const getAllbooking = async (req,res) => {
    try {
        const booking = await Booking.getAll();
        res.json(booking);
    } catch(error) {
        res.status(500).json({message : "Error get All booking", error})
    }
}
        
export const cancelBooking = async (req,res) => {
    try {
        const {ID} = req.params;
            const result = await Booking.cancelBooking(ID);
            res.json(result);
    } catch(error) {
        res.status(500).json({message : "Error cancel booking", error})
    }
}

export const getRoomSchedule = async (req,res) => {
        const {Building_ID} = req.params;
        try {
            const schedule = await Booking.getScheduleByRoom(Building_ID);
            res.json(schedule);
        } catch (error) {
            res.status(500).json({message : "Error Receiving schedule", error})
        }
}

