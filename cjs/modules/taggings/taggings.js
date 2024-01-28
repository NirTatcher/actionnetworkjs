module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByTag: async function (tagID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`tags/${tagID}/taggings`, page, per_page, filter) : await utils.getResourceCollection(`tags/${tagID}/taggings`, limit, per_page, filter) },
            create: async function (tagID, payloads) { return await utils.postResources(`ftags/${tagID}/taggings`, payloads) },
        }
    }
}