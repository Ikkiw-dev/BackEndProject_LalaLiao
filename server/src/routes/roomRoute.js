import express from "express";
import db from "../config/database.js";
const router = express.Router();

router.get("/", async (req,res) => {
    const [Room] = await db.promise.query(`SELECT * FROM Room`);
    res.json(Room);
});

router.get

router.get("/Room/:ID", async (req,res) => {
    const {ID} = req.params;
    const [Room] = await db.promise().query(`SELECT * FROM Room WHERE ID = ?`,[ID]);
    res.json(Room);
});

export default router;