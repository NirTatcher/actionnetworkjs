module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByList: async function (listID, itemID) {
                return await utils.getResource(`lists/${listID}/items/${itemID}`)
            },
        }
    }
}