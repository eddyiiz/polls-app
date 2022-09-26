const express = require("express");
const handler = require("./handlers");
const app = express();

app.use(handler.notFound);
app.use(handler.errors);

app.get("/", (req, res) => {
  res.json({ hello: " Hey, welcome!" });
});

const port = process.env.PORT || 3030;
app.listen(port, () => console.log("server running"));
