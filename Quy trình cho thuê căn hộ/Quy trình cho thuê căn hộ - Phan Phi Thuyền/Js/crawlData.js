const request = require("request");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const { builtinModules } = require("module");
module.exports.crawler = async function () {
  let result = [];
  const URL =
    "https://stay.vinhomes.vn/en/houses?prefn1=salesType&prefv1=LEASING&startDate=2021-12-07&endDate=2022-01-07";
  try {
    const res = await axios.get(URL);
    const $ = cheerio.load(res.data); // load HTML
    $(".item-list-product").each((index, el) => {
      // lặp từng phần tử có class là item-list-product
      const title = $(el).find(".product-name span a").text();
      const price = $(el).find(".highlight-price").text(); //
      let description = $(el).find(".list-description");
      const detailValues = description.find(".value-p-cart");
      // lặp qua từng value-p-cart trong list-dé
      const detailsInfo = [];
      detailValues.each((index, el) => {
        const info = $(el).text();
        if (info !== " ") {
          detailsInfo.push(info.replace(/\n/g, ""));
        }
      });
      const [area, bedroom, bathroom, direction] = [...detailsInfo];
      description = {
        area,
        bedroom,
        bathroom: parseInt(bathroom),
        direction,
        address : 'VinHomes Ocean Park, Gia Lâm, Hà Nội',
      };
      const data = {
        title,
        price: parseInt(price.replace(/\./g,'')),
        description,
      };
      result.push(data);
    });
    return result;
  } catch (e) {
    console.error(err);
  }
};