module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (eventID) { return await utils.getResource(`events/${eventID}`) },
            create: async function (payload) { return await utils.postResource(`events`, payload) },
            update: async function (eventID, payload) { return await utils.updateResource(`events/${eventID}`, payload) }
        }
    }
}