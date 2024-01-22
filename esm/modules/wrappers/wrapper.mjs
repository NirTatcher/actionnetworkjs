import utilsInit from "../utils/utils.mjs"

const wrapperInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (wrapperID) { return await utils.getResource(`wrappers/${wrapperID}`) },
            create: async function (tagID, payload) { return await utils.postResource(`wrappers/${wrapperID}`, payload) },
            update: async function (tagID, payload) { return await utils.updateResource(`wrappers/${wrapperID}`, payload) }
        }
    }
export default wrapperInit