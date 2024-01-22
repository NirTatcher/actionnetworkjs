import utilsInit from "../utils/utils.mjs"

const eventsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`events`, page, per_page, filter) : await utils.getResourceCollection(`events`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`events`, payloads) },
        }
    }
    export default eventsInit