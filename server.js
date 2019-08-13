const express = require("express");
//TODO: require sequelize 
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// TODO: When routes are ready to go, uncomment this line. Similar to the activities it will look something like: 
// `app.use("/api/"", routes)`

// Add routes, both API and view
// app.use(routes);

// TODO: Connect to the Sequelize DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
