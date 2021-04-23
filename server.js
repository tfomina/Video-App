const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "dist")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
