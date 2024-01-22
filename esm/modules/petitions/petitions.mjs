import utilsInit from "../utils/utils.mjs"

const petitionsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`petitions`, page, per_page, filter) : await utils.getResourceCollection(`petitions`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`petitions`, payloads) },
        }
}
export default petitionsInit