const express = require("express");
const path = require("path");
//TODO: require sequelize 
// const routes = require("./routes");

const PORT = process.env.PORT ||8090;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");

require("./routes/loginRoute")(app);
require("./routes/topicRoutes")(app);
require("./routes/userRoutes")(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client"));
}
//I commendted these out because we dont have an Apiroute section
// Use apiRoute//s
// app.use("/api", apiRoutes);
//TODO: When routes are ready to go, uncomment this line. Similar to the activities it will look something like: 
// `app.use("/api/"", routes)`

// Add routes, both API and view
// app.use(routes);

// TODO: Connect to the Sequelize DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

