const request = require("request");
const logger = require("morgan");
const cheerio = require("cheerio");

var scrape = function (cb) {

    request("https://www.washingtonpost.com/", function (err, res, body) {
        
        var $ = cheerio.load(body);
        
        var articles = [];

        $(".flex-stack").each(function (i, element) {

            var head = $(this).children(".headline").text().trim();
            var sum = $(this).children(".blurb").text().trim();
            
            var dataToAdd = {
                headline: head,
                summary: sum
            };

            articles.push(dataToAdd);
            console.log(articles)

        });
        cb(articles);
    });
};

module.exports = scrape;