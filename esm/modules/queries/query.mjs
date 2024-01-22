import utilsInit from "../utils/utils.mjs"

const queryInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (queryID) { return await utils.getResource(`queries/${queryID}`) },
            create: async function (payload) { return await utils.postResource(`queries`, payload) },
            update: async function (queryID, payload) { return await utils.updateResource(`queries/${queryID}`, payload) }
        }
}
export default queryInit