module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return { getByList: async function (listID, page = null, per_page = null, limit = null, filter = null) { return page ? utils.getResourceCollectionPaginated(`lists/${listID}/items`, page, per_page, filter) : await utils.getResourceCollection(`lists/${listID}/items`, limit, per_page, filter) }, }
    }
}