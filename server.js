const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

//const cors = require("cors");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());
//app.options("*", cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

//Connect to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooks", {
  //mongodb://root:@ds237357.mlab.com:37357/heroku_t4rrg571
  useNewUrlParser: true
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
