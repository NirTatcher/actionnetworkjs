module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByTag: async function (tagID, taggingID) { return await utils.getResource(`tags/${tagID}/taggings/${taggingID}`) },
            create: async function (tagID, payload) { return await utils.postResource(`tags/${tagID}/taggings`, payload) },
            update: async function (petitionID, taggingID, payload) { return await utils.updateResource(`tags/${petitionID}/taggings/${taggingID}`, payload) }
        }
    }
}