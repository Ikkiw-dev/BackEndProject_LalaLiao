import db from "../config/database.js";

export const getAllroom = async () => {
        const [Building] = await db.promise().query(`SELECT room FROM Building`);
        return Building;
};
    
export const getFloor = async (req,res) => {
    const [floor] = await db.promise().query(`SELECT DISTINCT name_floor FROM Building`);
    return floor;
}

export const getDetails = async (req,res) => {
    const [details] = await db.promise().query(`SELECT DISTINCT name_floor, room FROM Building`);
    return details;
}