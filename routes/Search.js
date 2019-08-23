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

var SearchForm = function (app) {

    app.get("/api/search/scrape", function (req, rs) {
        console.log("Search".help)

        var SearchArray = []

        axios.get("https://www.allsides.com/topics/free-speech").then(function (res) {
            var $ = cheerio.load(res.data)

            $(".allsides-daily-topic-container").each(function (res, data) {
                console.log("**********".info)
                console.log(res)
                console.log("data".info, data)
                var img = $("img", this).attr("src")
                var title = $("a", this).text()
                var summary = $("p", this).text()

                console.log("title".info, title)
                console.log("body".verbose, summary)
            })
        })
    })
}

module.exports = SearchForm