module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByPetition: async function (petitionID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`petitions/${petitionID}/signatures`, page, per_page, filter) : await utils.getResourceCollection(`petitions/${petitionID}/signatures`, limit, per_page, filter) },
            getByPerson: async function (personID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people/${personID}/signatures`, page, per_page, filter) : await utils.getResourceCollection(`people/${personID}/signatures`, limit, per_page, filter) },
            create: async function (petitionID, payloads) { return await utils.postResources(`petitions/${petitionID}/signatures`, payloads) },
        }
    }
}