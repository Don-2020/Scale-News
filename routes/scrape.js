// var db = require("../models")
var cheerio = require("cheerio")
var axios = require("axios")
var colors = require("colors")

module.exports = function (app) {

    app.get("/api/scrape", function (req, res) {
        console.log("scrape route")
        //console.log(req)
        var newsArray=[]
        // axios call to the website 
        axios.get("https://www.allsides.com/unbiased-balanced-news").then(function (res) {

            var $ = cheerio.load(res.data)

        //     $("#block-views-story-id-single-story-block").each(function (i, item) {
        //         console.log("***********".red)
        //         console.log(item)
        //         var title = $(".story-title").text()
        //         console.log("TITLE".red, title)
        //         // create an object with info and push it to an array 
        //     })
        //     $("#block-views-story-id-single-story-block-1").each(function (i, item) {
        //         console.log("***********".red)
        //         console.log(item)
        //         var title = $(".story-title").text()
        //         console.log("TITLE".red, title)
        //         // create an object with info and push it to an array 
        //     })
        //     $("#block-views-story-id-single-story-block-2").each(function (i, item) {
        //         console.log("***********".red)
        //         console.log(item)
        //         var title = $(".story-title").text()
        //         console.log("TITLE".red, title)
        //         // create an object with info and push it to an array 
        //     })
        //     // if you want you can insert the info in the DB
        //     res.json({news: newsArray})

        }
        )
        // cheerio to get the 3 block

        // foreach then find the info then update db (use a unique key to avoid duplicates (url))
        //res.json(data)
    })


}