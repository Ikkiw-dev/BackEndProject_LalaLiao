import {building} from "../models/buildingModel"

export const buildingController = {
    getAllbuildings : async (req,res) => {
        const building = await Building.getAll();
        res.json(building);
    }
};