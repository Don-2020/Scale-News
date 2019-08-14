// var db = require("../models");

module.exports = function(app) {
    

    app.post("/api/users", function(req, res){
        // Create a user account with data
        console.log(req)
    })

    //Displaying articles to user's bookmark section
    app.get("/api/users/:id/bookmarks", function(req,res){
        console.log(req);
    })

    // Creating bookmarks
    app.post("/api/users/:id/bookmarks", function(req,res){
        console.log(req,res);
    })

    //Deleting the bookmarks from user's view
    app.delete("/api/users/:id/bookmarks/:id", function(req,res) {
        console.log(req);
    })
}