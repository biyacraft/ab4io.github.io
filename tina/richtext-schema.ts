import { url } from "inspector";
import { Template, tinaTableTemplate } from "tinacms";


export const richTextComponents:Template[]=[
    tinaTableTemplate,
    {
        name: "VideoPlayer",
        label: "VideoPlayer",
        fields: [
            {
                name: "url",
                label: "Video URL",
                type: "string"
            }
        ],
        ui: {
            defaultItem:{
                url: "https://youtu.be/3nwR4wWYP-c"
            }
        }
    },
    {
        name: "CaptionedImage", 
        label: "Label Image",
        fields: [
            {
                name: "imgUrl",
                label: "Image URL",
                type: "image"
            },
            {
                name: "caption",
                label: "Caption",
                type: "string",
            },
        ]
    },
    {
        name: "TweetEmbed",
        label: "Tweet",
        ui: {
            defaultItem: {
                tweetId: "1695373757466964421",
            },
        },
        fields: [
            {
                name: "tweetId",
                label: "Tweet ID",
                type: "string",
                description: "Unique number (about 20-didits) at the end of the Tweet URL",
            },
        ],
    },
    {
        name: "TextBox",
        label: "Text Box",
        fields: [
            {
            name: "text",
            label: "Text",
            type: "rich-text",
            },
        ],
    },

    {
        name: "PullQuote",
        label: "Pull Quote",
        ui: {
            defaultItem: {
                text: "If I have seen further than others, it is standing upon the shoulders of giants.",
                author: "Isaac Newton",
            },
        },
        fields: [
            {
                name: "text",
                label: "Text",
                type: "string"
            },
            {
                name: "author",
                label: "Author",
                description: "Optional",
                type: "string",
            },
            {
                name: "authorLink",
                label: "Author Link",
                description: "Optional",
                type: "string",
            },

        ],
    },

]