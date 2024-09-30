const axios = require('axios');

exports.tiktok = async (url) => {
  try {
    const response = await axios.request({
        method: 'post',
        url: `https://lovetik.com/api/ajax/search?q=${encodeURIComponent(url)}`});
    const res = response.data

    result = {};
    result.creator = "Boedzhanks";
    result.desc = res.desc;
    result.author = res.author;
    result.nowm = res.links[0].a;
    result.watermark = res.links[1].a;
    result.audio = res.links[2].a;
    result.thumbnail = res.cover;
    return result;
  }
  catch (error) {
    console.log(error);
  }
}