import utilsInit from "../utils/utils.mjs"

const embedsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function (actionType, actionID) {
                return await utils.getResource(`embeds/${actionType}/${actionID}/embed`)
            },
        }
    }
export default embedsInit