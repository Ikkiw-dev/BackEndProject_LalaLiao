import db from "../config/database.js";

export const getAllroom = async () => {
        const [Building] = await db.promise().query(`SELECT room FROM Building`);
        return Building;
    };
