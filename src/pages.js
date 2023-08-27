const { en } = require("./i18n/en.js");
const { ko } = require("./i18n/ko.js");

async function pages()
{
    const result = [];
    const enList = await en();
    result.push(...enList);
    const koList = await ko();
    result.push(...koList);
    return result;
}

module.exports = { pages }