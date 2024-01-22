import utilsInit from "../utils/utils.mjs"

const submissionsInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            getByForm: async function (formID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`forms/${formID}/submissions`, page, per_page, filter) : await utils.getResourceCollection(`forms/${formID}/submissions`, limit, per_page, filter) },
            getByPerson: async function (personID, page = null, per_page = null, limit = null, filter = null) { return page ? await utils.getResourceCollectionPaginated(`people/${personID}/submissions`, page, per_page, filter) : await utils.getResourceCollection(`people/${personID}/submissions`, limit, per_page, filter) },
            create: async function (formID, payloads) { return await utils.postResources(`forms/${formID}/signatures`, payloads) },
        }
}
export default submissionsInit