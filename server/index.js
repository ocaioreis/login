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

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log("server running");
});

app.post("/", (req, res) => {
  let userData = req.body;
  console.log(userData);

  if (!userData || userData.length === 0) {
    res.status(400).send("Dados de usuário ausentes no corpo da solicitação.");
    return;
  }

  let nome = userData[userData.length - 1].nome;
  let email = userData[userData.length - 1].email;
  let senha = userData[userData.length - 1].senha;

  console.log(userData.length);

  pool.query(
    "INSERT INTO db.user (nome, email, senha) VALUES ($1, $2, $3)",
    [nome, email, senha],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(`Dados inseridos: ${nome}, ${email}, ${senha}`);
      res.status(201).send(`Dados inseridos: ${nome}, ${email}, ${senha}`);
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
