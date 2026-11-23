import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig){
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.addPassthroughCopy("img");
    eleventyConfig.addPassthroughCopy("vid");
    eleventyConfig.addPassthroughCopy("Styling.css");
}