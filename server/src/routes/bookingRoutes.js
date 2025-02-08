import express from "express";
import * as bookingController from "../controllers/bookingControllers.js";
const bookingRoute = express.Router();


bookingRoute.post("/createBooking", bookingController.createBooking);
bookingRoute.get("/getAllbooking", bookingController.getAllbooking);
bookingRoute.delete("/cancelbooking/:ID", bookingController.cancelBooking);
bookingRoute.get("/getRoomSchedule/:Building_ID", bookingController.getRoomSchedule);


export default bookingRoute