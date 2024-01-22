module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (eventCampaignID) { return await utils.getResource(`event_campaigns/${eventCampaignID}`) },
            create: async function (payload) { return await utils.postResource(`event_campaigns`, payload) },
            update: async function (eventCampaignID, payload) { return await utils.updateResource(`event_campaigns/${eventCampaignID}`, payload) }
        }
    }
}