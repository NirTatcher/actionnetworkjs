import utilsInit from "../utils/utils.mjs"

const itemInit = (apiKey)=>{
        const utils = utilsInit(apiKey)
        return {
            getByList: async function (listID, itemID) {
                return await utils.getResource(`lists/${listID}/items/${itemID}`)
            },
        }
}
export default itemInit