module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people`, page, per_page, filter) : await utils.getResourceCollection(`people`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`people`, payloads) },
        }
    }
}