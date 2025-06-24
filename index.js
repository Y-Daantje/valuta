import express from "express";
import {} from "dotenv/config";


const app = express();
const port = 3000;

app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
