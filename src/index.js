import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());

app.get("/a", (req, res) => {
  console.log("Request coming in for endpoint a!")
  res.json([{ id: 1, name: "Toyota Camry", price: "$20,000" }, { id: 2, name: "Mercedes CLS", price: "$50,000" }]);
});


app.get("/b", (req, res) => {
  console.log("Request coming in for endpoint b!")
  res.json({ language: "JavaScript", description: "JS is a programming language created in 10 days." });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}!`);
});
