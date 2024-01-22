import utilsInit from "../utils/utils.mjs"

const advocacyCampaignsInit = (apiKey)=> {
    // init(apiKey) {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`advocacy_campaigns`, page, per_page, filter) : await utils.getResourceCollection(`advocacy_campaigns`, limit, per_page, filter) },
            create: async function (payload) { return await utils.postResources(`advocacy_campaigns`,payload) },
        }
    // }
}
export default advocacyCampaignsInit