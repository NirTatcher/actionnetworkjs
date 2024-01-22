import utilsInit from "../utils/utils.mjs"

const outreachInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            getByAdvocacyCampaign: async function (advocacyCampaignID, outreachID) { return await utils.getResource(`advocacy_campaigns/${advocacyCampaignID}/outreaches/${outreachID}`) },
            getByPerson: async function (personID, outreachID) { return await utils.getResource(`people/${personID}/outreaches/${outreachID}`) },
            create: async function (advocacyCampaignID, payload) { return await utils.postResource(`advocacy_campaigns/${advocacyCampaignID}/outreaches`, payload) },
            update: async function (advocacyCampaignID, outreachID, payload) { return await utils.updateResource(`advocacy_campaigns/${advocacyCampaignID}/outreaches/${outreachID}`, payload) }
        }
}
export default outreachInit