import utilsInit from "../utils/utils.mjs"

const petitionInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (petitionID) { return await utils.getResource(`petitions/${petitionID}`) },
            create: async function (payload) { return await utils.postResource(`petitions`, payload) },
            update: async function (petitionID, payload) { return await utils.updateResource(`petitions/${petitionID}`, payload) }
        }
}
export default petitionInit