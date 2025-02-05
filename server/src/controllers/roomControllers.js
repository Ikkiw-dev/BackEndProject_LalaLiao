import {Room} from "../models/roomModel"

export const roomController = {
    getAllRooms : async (req,res) => {
        const rooms = await Room.getAll();
        res.json(rooms);
    },
    getRoomsByBuilding : async (req,res) => {
        const {buildingID} = req.params;
        const rooms = await Room.getbyBuilding(buildingID);
        res.json(rooms);
    }
};