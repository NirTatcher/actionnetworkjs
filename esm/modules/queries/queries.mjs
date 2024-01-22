import utilsInit from "../utils/utils.mjs"

const queriesInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`queries`, page, per_page, filter) : await utils.getResourceCollection(`queries`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`queries`, payloads) },
        }
}
export default queriesInit
