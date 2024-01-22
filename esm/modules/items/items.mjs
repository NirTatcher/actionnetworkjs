import utilsInit from "../utils/utils.mjs"

const itemsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return { getByList: async function (listID, page = null, per_page = null, limit = null, filter = null) { return page ? utils.getResourceCollectionPaginated(`lists/${listID}/items`, page, per_page, filter) : await utils.getResourceCollection(`lists/${listID}/items`, limit, per_page, filter) }, }
}
export default itemsInit