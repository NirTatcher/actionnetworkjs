import utilsInit from "../utils/utils.mjs"

const tagsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (tagID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`tags`, page, per_page, filter) : await utils.getResourceCollection(`tags`, limit, per_page, filter) },
            create: async function (formID, payloads) { return await utils.postResources(`tags`, payloads) },
        }
}
export default tagsInit