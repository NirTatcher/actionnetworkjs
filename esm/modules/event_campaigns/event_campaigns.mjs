import utilsInit from "../utils/utils.mjs"

const eventCampaignsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`event_campaigns`, page, per_page, filter) : await utils.getResourceCollection(`event_campaigns`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`event_campaigns`, payloads) },
        }
}
export default eventCampaignsInit