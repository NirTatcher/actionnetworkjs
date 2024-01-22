import utilsInit from "../utils/utils.mjs"

const formInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (formID) { return await utils.getResource(`forms/${formID}`) },
            create: async function (payload) { return await utils.postResource(`forms`, payload) },
            update: async function (formID, payload) { return await utils.updateResource(`forms/${formID}`, payload) }
        }
}
export default formInit