import db from "../config/database.js";

export const Bookingcreate = async (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)  => {
        const [result] = await db.promise().query(
            `INSERT INTO Booking (Building_ID, username, user_role, start_booking_date, start_time, end_time, description)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,[ Building_ID, username, user_role, start_booking_date, start_time, end_time, description]
        );
        return result.insert;
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
            `DELETE FROM Booking WHERE ID = ?;`,[ID]);
        return {message : "Booking Canceled"};
}

export const getScheduleByRoom = async (Building_ID) => {
        const [getSCbyroom] = await db.promise().query(
            `SELECT description, start_booking_date, start_time, end_time
            FROM Booking
            WHERE Building_ID = ?
            ORDER BY start_booking_date, start_time`,[Building_ID]
        );
        return getSCbyroom;
}

export const getEditdata = async (Building_ID, username, user_role, start_booking_date, start_time, end_time, description, ID) => {
    const [result] = await db.promise().execute(
        `UPDATE Booking
        SET Building_ID = ?, username = ?, user_role = ?, start_booking_date = ?, start_time = ?, end_time = ?, description = ?
        WHERE ID = ?`, 
        [Building_ID, username, user_role, start_booking_date, start_time, end_time, description, ID]
    );
    return result;
};

// export default componentscreate;