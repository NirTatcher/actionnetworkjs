module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (personID) { return await utils.getResource(`people/${personID}`) },
            create: async function (payload) { return await utils.postResource(`people`, payload) },
            update: async function (personID, payload) { return await utils.updateResource(`people/${personID}`, payload) }
        }
    }
}