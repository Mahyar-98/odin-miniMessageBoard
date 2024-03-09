const express = require("express");

// import the routers
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();
port = 3000;

// Set the view engine and the views directory
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
