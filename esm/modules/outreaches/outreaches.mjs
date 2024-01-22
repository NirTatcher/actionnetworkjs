import utilsInit from "../utils/utils.mjs"

const outreachesInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            getByAdvocacyCampaigns: async function (advocacyCampaignID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`advocacy_campaigns/${advocacyCampaignID}/outreaches`, page, per_page, filter) : await utils.getResourceCollection(`advocacy_campaigns/${advocacyCampaignID}/outreaches`, limit, per_page, filter) },
            getByPerson: async function (personID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people/${personID}/outreaches`, page, per_page, filter) : await utils.getResourceCollection(`people/${personID}/outreaches`, limit, per_page, filter) },
            create: async function (advocacyCampaignID, payloads) { return await utils.postResources(`advocacy_campaigns/${advocacyCampaignID}/outreaches`, payloads) },
        }
}
export default outreachesInit