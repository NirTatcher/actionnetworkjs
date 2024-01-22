import utilsInit from "../utils/utils.mjs"

const customFieldsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            get: async function () {
                return await utils.getResource(`metadata/custom_fields`)
            }
        }
}
export default customFieldsInit