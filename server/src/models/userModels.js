import db from "../config/database.js";

export const User = {
    getById : async (ID) => {
        const [user] = await db.promise().query(
            `SELECT *
            FROM USer WHERE ID = ?`,[ID]
        );
        return user[0];
    },

    create : async (fullname, email, role) => {
        const[result] = await db.promise().query(
            "INSERT INTO User (fullname, email, role) VALUES (?, ?, ?)",[fullname, email, role]
        );
        return result.insertId;
    }
};