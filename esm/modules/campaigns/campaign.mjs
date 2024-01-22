import utilsInit from "../utils/utils.mjs"

const campaignInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (campaignID) { return await utils.getResource(`campaigns/${campaignID}`) },
            create: async function (payload) { return await utils.postResource(`campaigns`, payload) },
            update: async function (campaignID, payload) { return await utils.updateResource(`campaigns/${campaignID}`, payload) }
        }
}
export default campaignInit