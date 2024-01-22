module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`wrappers`, page, per_page, filter) : await utils.getResourceCollection(`wrappers`, limit, per_page, filter) },
            create: async function (formID, payloads) { return await utils.postResources(`wrappers`, payloads) },
        }
    }
}