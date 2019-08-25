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

module.exports = function (app) {

    app.get("/api/topics/scrape", function (req, response) {

        console.log("Topic route".info);
        
        var topicsArray = []
        // axios call to website
        axios
        .get("https://www.allsides.com/topics-issues")
        .then( function(res) {

            var $ = cheerio.load(res.data);

            $(".views-row").each(function (res, data) {
                // console.log("**********".info)
                // console.log(res)
                
                var topic = $("a", this).text()
                
                var url = $(this)
                    .find("a")
                    .attr("href");
                // console.log("Topic".info, topic)
                // console.log("Url".verbose, url)

                var Topic = topic.trim();
                var URL = "https://www.allsides.com/topics/" + url
                var dataAdd = {
                    Topic,
                    URL
                }

                topicsArray.push(dataAdd);
            })
           
            response.json(topicsArray) // [{}, {}]

        })

    })

}

// Export the function, so other files in our backend can use it
