/*import db from "../config/database.js";

export const Room = {
    getAll : async() => {
        const [Room] = await db.promise().query(`SELECT * FROM Building`);
        return Room;
    },

    getByBuilding : async (buildingID) => {
        const [Room] = await db.promise().query(`SELECT * FROM Building WHERE Room = ? `, [ID]);
        return Room;
    }
};