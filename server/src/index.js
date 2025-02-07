import express from "express";
import cors from 'cors';
import connection from "./config/database.js";
import bookingRoute from "./routes/bookingRoutes.js"

import dotenv from "dotenv"

dotenv.config()

const app = express();
const port = 3999;

app.use(express.json());
app.use(cors());


app.get("/api/bookings",bookingRoute);



// app.get("/api/user", async (req, res) => {
//   try {
//     const [response] = await db.promise().query(
//       `SELECT id, image_url, email, username, role
//              FROM users 
//              WHERE id = ?`,
//       [userId]
//     );
//     return res.status(200).json({
//       success: true,
//       data: response,
//       message: "User retrieved successfully",
//     });
//   } catch (error) {
//     console.log("Error: ", error);
//     return res.status(500).json({
//       success: false,
//       data: null,
//       message: "Internal server error",
//     });
//   }
// });

connection.connect((err) => {
    if(err){
        console.log(err);
    } else {
        console.log("Database is connected");
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})