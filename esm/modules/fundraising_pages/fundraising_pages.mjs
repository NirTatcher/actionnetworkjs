import utilsInit from "../utils/utils.mjs"

const fundraisingPagesInit = (apiKey)=>{
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`fundraising_pages`, page, per_page, filter) : await utils.getResourceCollection(`fundraising_pages`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`fundraising_pages`, payloads) },
        }
}
export default fundraisingPagesInit