import * as Booking from "../models/bookingModels.js"

export const createBooking = async (req,res) => {
    try {
        const {Building_ID, username, user_role, start_booking_date, start_time, end_time, description} = req.body;
        const bookingId = await Booking.create(Building_ID, username, user_role, start_booking_date, start_time, end_time, description);
        res.status(200).json({bookingId, message : "Booking is Created"})
    } catch(error) {
        res.status(500).json({message : "Error creating schedule", error})
    }
}

export const getAllbooking = async (req,res) => {
    try {
        const booking = await Booking.Booking.getAll();
        res.json(booking);
    } catch(error) {
        res.status(500).json({message : "Error get All booking", error})
    }
}
        
export const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.params;
            const result = await Booking.Booking.cancelBooking(Building_ID, username, user_role, start_booking_date, start_time, end_time, description);
            res.json(result);
    } catch(error) {
        res.status(500).json({message : "Error cancel booking", error})
    }
}

export const getRoomSchedule = async (req, res) => {
        const {Building_ID} = req.params;
        try {
            const schedule = await Booking.Booking.getScheduleByRoom(Buiiding_ID);
            res.json(schedule);
        } catch (error) {
            res.status(500).json({message : "Error Receiving schedule", error})
        }
}

