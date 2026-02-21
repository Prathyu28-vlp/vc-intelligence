import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req,res){

const {url} = req.body;

const response = await axios.get(url);

const html = response.data;

const $ = cheerio.load(html);

const text = $("p").text();

const summary = text.substring(0,200);

const keywords = text.split(" ").slice(0,10);

res.status(200).json({

summary,

keywords,

source:url,

timestamp: new Date()

});

}