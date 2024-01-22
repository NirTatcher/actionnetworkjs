module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (actionType, actionID) {
                return await utils.getResource(`embeds/${actionType}/${actionID}/embed`)
            },
        }
    }
}