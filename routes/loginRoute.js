// var db = require("../models")

module.exports = function(app){

    app.get("/api/login",function(req,res){
        console.log(req)
    })

    app.get("/api/register", function(req, res){
        console.log(req)
    })

    app.get("/api/logoff", function(req,res){
        console.log(req)
    })
}