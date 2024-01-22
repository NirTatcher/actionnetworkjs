import utilsInit from "../utils/utils.mjs"

const taggingsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            getByTag: async function (tagID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`tags/${tagID}/taggings`, page, per_page, filter) : await utils.getResourceCollection(`tags/${tagID}/taggings`, limit, per_page, filter) },
            create: async function (formID, payloads) { return await utils.postResources(`ftags/${tagID}/taggings`, payloads) },
        }
    }
export default taggingsInit