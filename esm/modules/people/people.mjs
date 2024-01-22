import utilsInit from "../utils/utils.mjs"

const peopleInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people`, page, per_page, filter) : await utils.getResourceCollection(`people`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`people`, payloads) },
        }
}
export default peopleInit