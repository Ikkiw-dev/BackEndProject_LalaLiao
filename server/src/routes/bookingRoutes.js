import express from "express";
import bookingController from "../controllers/bookingControllers.js";
import * as Booking from "../models/bookingModels.js"
const bookingRoute = express.Router();

bookingRoute.get("/", bookingController.getAllbooking);

export default bookingRoute;