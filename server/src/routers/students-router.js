import express from "express";
import db from "../db/db.js";

const studentsRouter = express.Router();

studentsRouter.get("/students", (req, res) => {
  const { q } = req.params;
  const [rows, _] = db.query(
    "SELECT * FROM Student JOIN User WHERE User.fullName LIKE ?",
    [q]
  );
  res.send(rows);
});

studentsRouter.get("/students/:registration", (req, res) => {
  const { registration } = req.query;
  const [rows, _] = db.query(
    "SELECT * FROM Student JOIN User WHERE User.registration = ?",
    [registration]
  );
  res.send(rows);
});

export default studentsRouter;
