module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./static/styles.css")
    return {
        dir: {
            input: "src",
            output: "public",
        }
    };
}