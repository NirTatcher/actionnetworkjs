module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return { get: async function (listID) { return await utils.getResource(`lists/${listID}`) }, }
    }
}