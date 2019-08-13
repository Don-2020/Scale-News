var db = require("../models");
var scrap = require("cheerio")

module.exports = function(app) {

app.get("/api/topics/:topicid/scrap", function(req,res){
    console.log(req);
})

}