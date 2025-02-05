import db from "../config/database.js";

export const Room = {
    getAll : async() => {
        const [Room] = await db.promise().query(`SELECT * FROM Room`);
        return Room;
    },

    getByBuilding : async (buildingID) => {
        const [Room] = await db.promise().query(`SELECT * FROM Room WHERE ID = ? `, [ID]);
        return Room;
    }
};