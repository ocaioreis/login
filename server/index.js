import express from "express";
import cors from "cors";
import users from "./users.js";
import pkg from "pg";
import bodyParser from "body-parser";

const app = express();

const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mine",
  password: "masterkey",
  port: 5432,
});

app.use(bodyParser.json());

app.post("/", (req, res) => {
  let vamo = req.body;
  console.log(vamo);

  pool.query(
    "INSERT INTO db.user (email, senha) VALUES ($1, $2)",
    [vamo.email, vamo.senha],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(`Dados inseridos: ${vamo.email}, ${vamo.senha}`);
      res.status(201).send(`Dados inseridos: ${vamo.email}, ${vamo.senha}`);
    }
  );
});

pool.query("SELECT * FROM db.user", (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res.rows);
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("server running");
});
