// var db = require("../models")
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

    app.get("/api/scrape", function (req, res) {
        console.log("scrape route")
        //console.log(req)
        var newsArray=[]
        // axios call to the website 
        axios.get("https://www.allsides.com/unbiased-balanced-news").then(function (res) {

            var $ = cheerio.load(res.data)

            $("#block-views-story-id-single-story-block").each(function (i, item) {
                console.log("***********".red)
                // console.log(item)
                var title = $(".story-title").text()
                console.log("TITLE".red, title)
                var p = $("p", this).text(); 
                console.log("p".red, p)
                // var articles = $(".news-title").text()
             
                // create an object with info and push it to an array 

            });

            // just to het 3 sub articles
            $('.view-id-story_id_single_child_articles').each(function (i, item) {
                // console.log("*********".blue);
                let test = $(item).children().text();
                test = test.split('From the');
                // console.log(test);
                filteredTest = test.filter(cv => cv.includes('Center') || cv.includes('Right') || cv.includes('Left'));
                // console.log('\n ********** \n'.warn, filteredTest);
                let subArticles = [];
                for (let i = 0; i < filteredTest.length; i++) {
                    let newString = '';
                    for (let j = 0; j < filteredTest[i].length; j++) {
                        if (filteredTest[i][j] !== '\n') {
                            newString += filteredTest[i][j];
                        }
                    }
                    subArticles.push(newString);
                    newString = '';
                }
                // console.log('newString'.silly, subArticles);
                let a = subArticles.map(cv => cv.trim()
                    .replace('                   ', '')
                    .replace('                   ', '')
                    .replace('                   ', '')
                    )
                console.log('RAINBOW'.silly, a);

            })


            // let mainStory = $("#block-views-story-id-single-story-block").children().text();
            // console.log('main story'.red, mainStory);
            // let mainStory = $("#block-views-story-id-single-story-block").contents().text().trim();
            // console.log('>>>>>>>>>'.red, mainStory);

                // let title =$("#block-views-story-id-single-story-block").children('.story-title').text()
                // console.log("title".red, title)

                // console.log("***********".red)
                // console.log(item)
                // var title = $(".story-title").text()
                // console.log("TITLE".red, title)
                // var p = $("p", this).text(); 
                // console.log("p".red, p)
                // // var articles = $(".news-title").text()
                // let articles = $('div', this).hasClass('news-title');
                // console.log("articles".red, articles)

                // create an object with info and push it to an array 


            // $("#block-views-story-id-single-story-block-1").each(function (i, item) {
            //     console.log("***********".red)
            //     console.log(item)
            //     var title = $(".story-title").text()
            //     console.log("TITLE".red, title)
            //     // create an object with info and push it to an array 
            // })
            // $("#block-views-story-id-single-story-block-2").each(function (i, item) {
            //     console.log("***********".red)
            //     console.log(item)
            //     var title = $(".story-title").text()
            //     console.log("TITLE".red, title)
            //     // create an object with info and push it to an array 
            // })
            // if you want you can insert the info in the DB
            // res.json({news: newsArray})

        }
        )
        // cheerio to get the 3 block

        // foreach then find the info then update db (use a unique key to avoid duplicates (url))
        //res.json(data)
    })


}