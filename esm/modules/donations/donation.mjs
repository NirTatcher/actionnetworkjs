import utilsInit from "../utils/utils.mjs"

const donationInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (donationID) { return await utils.getResource(`donations/${donationID}`) },
            create: async function (payload) { return await utils.postResource(`donations`, payload) },
            update: async function (donationID, payload) { return await utils.updateResource(`donations/${donationID}`, payload) }
        }
    }
export default donationInit
