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

    app.get("/api/scrape", function (req, response) {
        console.log("scrape route".silly)
        //console.log(req)
        var newsArray = []
        // axios call to the website 
        axios
            .get("https://www.allsides.com/unbiased-balanced-news")
            .then(function (res) {
                var $ = cheerio.load(res.data)

                // TPDO: create an object with info and push it to an array 
                let title = $('.story-title', "#block-views-story-id-single-story-block").text()
                // console.log("TITLE".red, title)

                let url = "https://www.allsides.com" + ($('.field-content', "#block-views-story-id-single-story-block").find("a").attr("href"))
                console.log("URL".red, url)
                let section = 0;
                let data = {

                }
                function doOne(i, item) {
                    // console.log(this)
                    // console.log(p = $("div p", this).text());
                    // console.log($('div', this));
                    let p = $("p", "#block-views-story-id-single-story-block" + (section ? '-' + section.toString() : '')).text();
                    // console.log("p".red, p)

                    // console.log("*********".verbose, item);
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
                    let povArticles = subArticles.map(cv => cv.trim()
                        .replace('                   ', '')
                        .replace('                   ', '')
                        .replace('                   ', '')
                    )
                    let src1 = $('.story-id-image', this).children().attr('src');
                    data.paragraph = p;
                    if (src1) {
                        data.image = src1;
                    }

                    let povArray = povArticles.map(element => {

                        let obj = {};

                        let splitSource = element.split('     ');
                        let ssource = splitSource.pop().trim();
                        splitSource = splitSource[0].split(' ');
                        let spov = splitSource.shift().trim();
                        let stagline = splitSource.join(' ').trim();

                        obj.source = ssource;
                        obj.pov = spov;
                        obj.tagline = stagline;

                        console.log(obj);
                        return obj;

                    })

                    // rearrange so order is left, center, right
                    const newPovArray = [];
                    if (!newPovArray.length) {
                        console.log('inside if 1')
                        let [left] = povArray.filter(element => element.pov === 'Left');
                        newPovArray.push(left);
                    }

                    if (newPovArray.length === 1) {
                        console.log('inside if 2')
                        let [center] = povArray.filter(element => element.pov === 'Center');
                        newPovArray.push(center);
                    }

                    if (newPovArray.length === 2) {
                        console.log('inside if 3')
                        let [right] = povArray.filter(element => element.pov === 'Right');
                        newPovArray.push(right);
                    }

                    console.log('NEW ARRAY'.silly, newPovArray);

                    data.other = newPovArray;

                }


                // just to het 3 sub articles
                // console.log('========== START HERE ========')

                $('.view-id-story_id_single_child_articles', '#block-views-story-id-single-story-block').each(doOne);
                data.title = title;
                data.url = url
                // console.log("data: ".red, data)
                newsArray.push(data)
                data = {}
                // console.log("NEWSARRAY".red, newsArray)


                // just to het 3 sub articles
                // console.log('========== START HERE ========')
                title = $('.story-title', "#block-views-story-id-single-story-block-1").text()
                // console.log("TITLE".red, title)
                url = "https://www.allsides.com" + $('.field-content', "#block-views-story-id-single-story-block-1").find("a").attr("href")
                section++;

                $('.view-id-story_id_single_child_articles', '#block-views-story-id-single-story-block-1').each(doOne)
                data.title = title;
                data.url = url
                // console.log("data: ".red, data)
                newsArray.push(data)
                data = {}
                // console.log("NEWSARRAY".red, newsArray)


                // just to het 3 sub articles
                // console.log('========== START HERE ========')
                title = $('.story-title', "#block-views-story-id-single-story-block-2").text()
                // console.log("TITLE".red, title)
                url = "https://www.allsides.com" + $('.field-content', "#block-views-story-id-single-story-block-2").find("a").attr("href")
                section++;
                $('.view-id-story_id_single_child_articles', '#block-views-story-id-single-story-block-2').each(doOne)
                data.title = title;
                data.url = url
                // console.log("data: ".red, data)
                newsArray.push(data)

                // console.log("NEWSARRAY".red, newsArray)

                // console.log("NEWSARRAY".silly, newsArray)
                response.json({ news: newsArray })


            })

    })


}