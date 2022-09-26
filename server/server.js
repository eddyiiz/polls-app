require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const handler = require("./handlers");

app.use(cors());
app.use(bodyparser.json());

app.get("/", (req, res) => {
  res.json({ hello: " Hey, welcome!" });
});

app.use(handler.notFound);
app.use(handler.errors);

const port = process.env.PORT;
app.listen(port, () => console.log("server running"));
