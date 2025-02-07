import express from "express";
import * as buildingControl from  "../controllers/buildingControllers";
import * as buildingModels from "../models/buildingModel"
const buildingRoute = express.Router();

//api สำหรับดึงรายการห้องทั้งหมด
buildingRoute.get("/getAllroom", buildingControl.getAllroom);

export default buildingRoute;