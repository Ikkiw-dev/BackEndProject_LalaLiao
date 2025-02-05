const express = require("express");
import db from "../config/database.js";
const router = express.Router();

//api สำหรับดึงรายการอาคารทั้งหมดคับจู้
router.get("/", async (req,res) => {
    const [Building] = await db.promise().query(`SELECT * FROM Building`);
    res.json(Building);
});

export default router;