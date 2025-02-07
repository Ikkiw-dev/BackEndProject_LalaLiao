import * as Booking from "../models/bookingModels.js"

const bookingController = {
    createBooking : async (req,res) => {
        const {Building_ID, username, user_role, start_booking_date, start_time, end_time, description} = req.body;
        const bookingId = await Booking.create(Building_ID, username, user_role, start_booking_date, start_time, end_time, description);
        res.status(200).json({bookingId, message : "Booking is Created"})
    },
    getAllbooking : async (req,res) => {
        const booking = await Booking.Booking.getAll();
        res.json(booking);
    },
    cancelBooking: async (req, res) => {
        const { bookingId } = req.params;
        const result = await Booking.cancel(Id);
        res.json(result);
    },
    getRoomSchedule : async (req, res) => {
        const {Building_ID} = req.params;

        try {
            const schedule = await Booking.getScheduleByRoom(Buiiding_ID);
            res.json(schedule);
        } catch (error) {
            res.status(500).json({message : "Error Receiving schedule", error})
        }
    }
}

export default bookingController
