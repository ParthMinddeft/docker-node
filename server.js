const express = require("express");

const PORT = process.env.PORT || 5500;

const app = express();

app.get("/", (req, res) => {
  return res.send("Welcome To Node Express Js In Docker");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
