import express from "express";
import * as BookingControl from  "../controllers/bookingControllers.js";
import * as bookingModels from "../models/bookingModels.js"
const bookingRoute = express.Router();

bookingRoute.post("/createBooking", BookingControl.createBooking);
bookingRoute.get("/getAllbooking", BookingControl.getAllbooking);
bookingRoute.delete("/cancelbooking", BookingControl.cancelBooking);
bookingRoute.get("/getRoomSchedule", BookingControl.getRoomSchedule);

export default bookingRoute;