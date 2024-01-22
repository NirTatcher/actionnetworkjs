module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByFundraisingPage: async function (fundraisingPageID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`fundraising_pages/${fundraisingPageID}/donations`, page, per_page, filter) : await utils.getResourceCollection(`fundraising_pages/${fundraisingPageID}/donations`, limit, per_page, filter) },
            getByPerson: async function (personID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`fundraising_pages/${personID}/donations`, page, per_page, filter) : await utils.getResourceCollection(`fundraising_pages/${personID}/donations`, limit, per_page, filter) },
            create: async function (fundraisingPageID, payloads) { return await utils.postResources(`fundraising_pages/${fundraisingPageID}/donations`, payloads) },
        }
    }

}