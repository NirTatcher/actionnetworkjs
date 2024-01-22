import utilsInit from "../utils/utils.mjs"

const metadataInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return { get: async function () { await utils.getResource("metadata") }, }
}
export default metadataInit