module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (tagID) { return await utils.getResource(`tags/${tagID}`) },
            create: async function (tagID, payload) { return await utils.postResource(`tags/${tagID}`, payload) },
            update: async function (tagID, payload) { return await utils.updateResource(`tags/${tagID}`, payload) }
        }
    }
}