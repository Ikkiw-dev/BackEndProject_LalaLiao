import db from "../config/database.js";

export const Building = {
    getAll : async () => {
        const [Building] = await db.promise().query(`SELECT * FROM Building`);
        return Building;
    }
};