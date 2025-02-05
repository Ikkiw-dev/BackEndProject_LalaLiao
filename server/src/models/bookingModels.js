import db from "../config/database.js";

export const Booking = {
    create : async (ID, title, last_update, start_time, end_time, User_ID, Room_ID, description)  => {
        const [result] = await db.promise().query(
            `INSERT INTO Bookings (ID, title, last_update, start_time, end_time, User_ID, Room_ID, description)
            VALUES (?, ?, ?, ?, ?, ?, ? "-")`,[ID, title, last_update, start_time, end_time, User_ID, Room_ID]
        );
        return result.insertId;
    },
    getAll : async () => {
        const [Bookings] = await db.promise().query(
            `SELECT *
            FROM Bookings`
        );
        return Bookings; 
    },
    cancel : async(ID) => {
        await db.promise().query(
            `DELETE FROM Bookings WHERE ID = ?`,[ID]);
            return {message : "Booking Canceled"};
    }
}