import express from "express";

const app = express();
const port = 3000;

app.get("/a", (req, res) => {
  res.json({ 1: "Hello world!!!" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
