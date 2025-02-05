import express from 'express'
import db from "../config/database.js";
const router = express.Router();

//api สำหรับดึงข้อมูล user ทั้งหมด 

router.get("/:id", async (req, res) => {
    const {id} = require.params;
    const [User] = await db.promise().query(
        `SELECT *
        FROM USer
        WHERE ID = ?`, [ID]
    );
    res.json(user);
});
export default router;