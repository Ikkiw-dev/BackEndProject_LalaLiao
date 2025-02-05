import {Booking} from "../models/bookingModels.js"

const bookingController = {
    createBooking : async (req,res) => {
        const {ID, title, last_update, start_time, end_time, User_ID, Room_ID} = req.body;
        const bookingId = await Booking.create(ID, title, last_update, start_time, end_time, User_ID, Room_ID);
        res.status(200).json({bookingId, message : "Booking is Created"})
    },
    getAllbooking : async (req,res) => {
        const booking = await Booking.getAll();
        res.json(booking);
    },
    cancelBooking: async (req, res) => {
        const { bookingId } = req.params;
        const result = await Booking.cancel(Id);
        res.json(result);
      }
}

export default bookingController