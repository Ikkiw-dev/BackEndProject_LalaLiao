import * as buildings from "../models/buildingModel.js"

export const getAllbuildings = async (req,res) => {
    try{
        const building = await buildings.getAllroom();
        res.status(200).json(building);
    } catch (error) {
        res.status(500).json({message : "Error building getting", error})
    }
}

export const getFloor = async (req, res) => {
    try {
        const floor = await buildings.getFloor();
        res.status(200).json(floor);
    }catch (error) {
        res.status(500).json({message : "Error floor getting", error})
    }
}