import utilsInit from '../utils/utils.mjs';

const advocacyCampaignInit = (apiKey)=> {
    const utils = utilsInit(apiKey)
    return{
    get: async function (advocacyCampaignID) { return await utils.getResource(`advocacy_campaigns/${advocacyCampaignID}`) },
    create: async function (payload) { return await utils.postResource(`advocacy_campaigns`, payload) },
    update: async function (advocacyCampaignID,payload) { return await utils.updateResource(`advocacy_campaigns${advocacyCampaignID}`, payload) }
}
}

  
export default advocacyCampaignInit