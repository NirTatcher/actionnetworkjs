import utilsInit from "../utils/utils.mjs"

const listsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (page = null, per_page = null, limit = null, filter = null) { return page ? utils.getResourceCollectionPaginated(`lists`, page, per_page, filter) : await utils.getResourceCollection(`lists`, limit, per_page, filter) },
        }
}
export default listsInit