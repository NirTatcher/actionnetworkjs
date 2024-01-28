import utilsInit from "../utils/utils.mjs"

const campaignsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`campaigns`, page, per_page, filter) : await utils.getResourceCollection(`campaigns`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`campaigns`, payloads) },
        }
}
export default campaignsInit