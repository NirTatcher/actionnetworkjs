module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByEvent: async function (eventID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`events/${eventID}/attendances`, page, per_page, filter) : await utils.getResourceCollection(`events/${eventID}/attendances`, limit, per_page, filter) },
            getByPerson: async function (personID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people/${personID}/attendacnes`, page, per_page, filter) : await utils.getResourceCollection(`people/${personID}/attendances`, limit, per_page, filter) },
            create: async function (eventID, payloads) { return await utils.postResources(`events/${eventID}/attendances`, payloads) },
        }
    }
}