import express from "express";
import * as buildingControl from  "../controllers/buildingControllers.js";
import * as buildingModels from "../models/buildingModel.js"
const buildingRoute = express.Router();

//api สำหรับดึงรายการห้องทั้งหมด
buildingRoute.get("/getAllroom", buildingControl.getAllbuildings);
buildingRoute.get("/getFloor", buildingControl.getFloor)
buildingRoute.get("/getDetails", buildingControl.getDetails)

export default buildingRoute;