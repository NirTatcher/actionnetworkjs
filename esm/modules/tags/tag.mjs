import utilsInit from "../utils/utils.mjs"

const tagInit =(apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (tagID) { return await utils.getResource(`tags/${tagID}`) },
            create: async function (tagID, payload) { return await utils.postResource(`tags/${tagID}`, payload) },
            update: async function (tagID, payload) { return await utils.updateResource(`tags/${tagID}`, payload) }
        }
    }
    export default tagInit
