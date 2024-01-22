import utilsInit from "../utils/utils.mjs"

const listInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return { get: async function (listID) { return await utils.getResource(`lists/${listID}`) }, }
    }
export default listInit