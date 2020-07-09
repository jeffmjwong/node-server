import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/a", (req, res) => {
  console.log("Request coming in for endpoint a!")
  res.json([{ id: 9002, name: "Martin Lombok" }, { id: 9005, name: "Kevin Nam" }]);
});

app.get("/b", (req, res) => {
  console.log("Request coming in for endpoint b!")
  res.json({ 2: "JS is the best!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
