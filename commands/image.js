var Scraper = require('images-scraper')

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})
module.exports = {
    name: 'image',
    description: 'plays music',
    async execute(client, message, args){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter the name of the image');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
        
    }
}