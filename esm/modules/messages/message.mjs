import utilsInit from "../utils/utils.mjs"

const messageInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (messageID) { return await utils.getResource(`messages/${messageID}`) },
            create: async function (payload) { return await utils.postResource(`messages`, payload) },
            update: async function (messageID, payload) { return await utils.updateResource(`messages/${messageID}`, payload) }
        }
}
export default messageInit