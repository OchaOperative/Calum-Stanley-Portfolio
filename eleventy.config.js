export default function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("vid");
    eleventyConfig.addPassthroughCopy("Styling.css");
}