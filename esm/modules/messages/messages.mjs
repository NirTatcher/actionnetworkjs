import utilsInit from "../utils/utils.mjs"

const messagesInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`messages`, page, per_page, filter) : await utils.getResourceCollection(`messages`, limit, per_page, filter) },
            create: async function (payloads) { return await utils.postResources(`messages`, payloads) },
        }
}
export default messagesInit