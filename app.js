const express = require("express");

// import the routers
const router = require("./routes/index");

const app = express();
port = 3000;

// Set the view engine and the views directory
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

// Middleware for parsing the body for POST requests
app.use(express.urlencoded({ extended: false }))

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
