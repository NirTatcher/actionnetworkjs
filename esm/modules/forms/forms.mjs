import utilsInit from "../utils/utils.mjs"

const formsInit =(apiKey)=>   {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`forms`, page, per_page, filter) : await utils.getResourceCollection(`forms`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`forms`, payloads) },
        }
    }
export default formsInit