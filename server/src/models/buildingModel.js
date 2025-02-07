import db from "../config/database.js";

export const getAll = async () => {
        const [Building] = await db.promise().query(`SELECT room FROM Building`);
        return Building;
    };
