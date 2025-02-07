import * as buildings from "../models/buildingModel.js"

export const getAllbuildings = async (req,res) => {
    try{
        const building = await buildings.Building.getAllroom();
        res.status(200).json(building);
    } catch (error) {
        res.status(500).json({message : "Error building getting", error})
    }
}