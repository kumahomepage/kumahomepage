module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy("src/favicon.ico");

    return {
        htmlTemplateEngine: "njk",
        dir: {
        input: "src",
        output: "_site"
        }
    };
};
