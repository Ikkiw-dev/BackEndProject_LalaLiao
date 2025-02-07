import express from "express";
import bookingController, { getRoomSchedule } from "../controllers/bookingControllers.js";
const bookingRoute = express.Router();

bookingRoute.get("/", bookingController.getAllbooking);

export default bookingRoute;