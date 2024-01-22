module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (campaignID) { return await utils.getResource(`campaigns/${campaignID}`) },
            create: async function (payload) { return await utils.postResource(`campaigns`, payload) },
            update: async function (campaignID, payload) { return await utils.updateResource(`campaigns/${campaignID}`, payload) }
        }
    }
}