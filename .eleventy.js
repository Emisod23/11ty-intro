module.exports = function(eleventyconfig) {
    
    eleventyconfig.addPassthroughCopy("src/images");
    eleventyconfig.addWatchTarget("src/images");

    return {
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
};