import utilsInit from "../utils/utils.mjs"

const fundraisingPageInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (fundraisingPageID) { return await utils.getResource(`fundraising_pages/${fundraisingPageID}`) },
            create: async function (payload) { return await utils.postResource(`fundraising_pages`, payload) },
            update: async function (fundraisingPageID, payload) { return await utils.updateResource(`fundraising_pages/${fundraisingPageID}`, payload) }
        }
}
export default fundraisingPageInit