import db from "../config/database.js";

export const Booking = {
    create : async (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)  => {
        const [result] = await db.promise().query(
            `INSERT INTO Booking (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,[Building_ID, username, user_role, start_booking_date, start_time, end_time, description]
        );
        return result.insertId;
    },
    getAll : async () => {
        const [Bookings] = await db.promise().query(
            `SELECT *
            FROM Booking`
        );
        return Bookings; 
    },
    cancel : async(ID) => {
        await db.promise().query(
            `DELETE FROM Booking WHERE Building_ID = ?, username = ?, user_role = ?, start_booking_date = ?, start_time = ?, end_time = ?,      description = ?  `,[]);
        return {message : "Booking Canceled"};
    },
    getScheduleByRoom : async (ID) => {
        const [getSCbyroom] = await db.promise().query(
            `SELECT description, start_booking_date, start_time, end_time,
            FROM Booking
            WHERE Building_ID = ?
            ORDER BY start_booking_date, start_time`,[Building_ID]
        );
        return getSCbyroom;
    }
    
}