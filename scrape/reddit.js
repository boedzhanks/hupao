const axios = require('axios')
const cheerio = require('cheerio');

exports.reddit = async (url) => {
    try {
      const response = await axios.request({
          method: "POST",
          url: `https://savemp4.red/backend.php?url=${url}`
      });
      const html = response.data
      const $ = cheerio.load(html)
      const href = $('a.downloadButton').attr('href');
          const fileSize = $('.fa-file').parent().find('b').text();
          const duration = $('.fa-clock').parent().find('b').text();
  
          const result = {};
          result.status = 200
          result.author = "Boedzhanks",
          result.video = href;
          result.size = fileSize;
          result.duration = duration;
          return result;
    }
    catch (error) {
      console.log(error);
    }
  }