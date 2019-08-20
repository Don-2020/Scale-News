// var db = require("../models");
var cheerio = require("cheerio")
var axios = require("axios")
var colors = require("colors")
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

module.exports = function(app) {

app.get("/api/topics/scrape", function(req,res){
    console.log("Topic route".info);
    // console.log("Topic routes: ", req)
    var topicArray = []
    // axios call to website
    axios.get("https://www.allsides.com/topics-issues").then(function(res) {

        var $ = cheerio.load(res.data)
// console.log("somethign".error, res.data)
        $(".views-row").each(function (res, data) {
            console.log("**********".info)
            console.log(res)
            var topic = $("a", this).text()
            var url = $(this)
            .find("a")
            .attr("href");
            console.log("Topic".info,topic)
            console.log("Url".verbose, url)
        })
        // $("#views-row-even").each(function (res, data) {
        //     console.log("************".info)
        //     console.log(data)
        //     var topic = $("a").text()
        //     console.log("Topic".info, topic)
        // })
        // res.json({topic:topicArray})
    })
    
})

}