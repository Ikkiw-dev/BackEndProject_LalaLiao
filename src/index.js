import express from "express";
import connection from "./src/config/database.js";
import playlistRoute from "./src/routes/playlistRoute.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/playlists", playlistRoute);

import db from "./config/database.js";
const userId = 26;

app.get("/api/user", async (req, res) => {
  try {
    const [response] = await db.promise().query(
      `SELECT id, image_url, email, username, role
             FROM users 
             WHERE id = ?`,
      [userId]
    );
    return res.status(200).json({
      success: true,
      data: response,
      message: "User retrieved successfully",
    });
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
});


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