const {DateTime} = require('luxon');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/styles.css");
    eleventyConfig.addPassthroughCopy("./src/pass_overs");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/scripts");
    eleventyConfig.addPassthroughCopy("./src/admin");

    eleventyConfig.addFilter('showDate', (dateObj) =>{
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toLocaleString(DateTime.DATE_HUGE);
    });
    
    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
}