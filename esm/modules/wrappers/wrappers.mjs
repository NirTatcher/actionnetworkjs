import utilsInit from "../utils/utils.mjs"

const wrappersInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`wrappers`, page, per_page, filter) : await utils.getResourceCollection(`wrappers`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`wrappers`, payloads) },
        }
    }
    export default wrappersInit