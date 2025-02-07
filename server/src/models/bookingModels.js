import db from "../config/database.js";

export const Bookingcreate = async (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)  => {
        const [result] = await db.promise().query(
            `INSERT INTO Booking (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,[Building_ID, username, user_role, start_booking_date, start_time, end_time, description]
        );
        return result.insertId;
}

export const getAll = async () => {
        const [Bookings] = await db.promise().query(
            `SELECT *
            FROM Booking`
        );
        return Bookings; 
}

export const cancelBooking = async(ID) => {
        await db.promise().query(
            `DELETE FROM Booking WHERE Building_ID = ?, username = ?, user_role = ?, start_booking_date = ?, start_time = ?, end_time = ?,      description = ?  `,[Building_ID, username, user_role, start_booking_date, start_time, end_time, description]);
        return {message : "Booking Canceled"};
}

export const getScheduleByRoom = async (ID) => {
        const [getSCbyroom] = await db.promise().query(
            `SELECT description, start_booking_date, start_time, end_time,
            FROM Booking
            WHERE Building_ID = ?
            ORDER BY start_booking_date, start_time`,[Building_ID]
        );
        return getSCbyroom;
}

export const getEditdata = async (req,res) => {
        const [result] = await db.promise().execute(
            `UPDATE Booking
            SET Building_ID = ?, username = ?, user_role = ?, start_booking_date = ?, start_time = ?, end_time = ?, description = ?
            WHERE ID = ?`, [ID]
        );
}
// export default componentscreate;