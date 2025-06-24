import express from "express";
import fs from "node:fs";
import {} from "dotenv/config";
import { MongoClient } from "mongodb";

const app = express();
const port = 3000;

const databaseUrl = process.env.CONNECTION_URL;

app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
