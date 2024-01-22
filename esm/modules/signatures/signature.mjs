import utilsInit from "../utils/utils.mjs"

const signatureInit = (apiKey)=> {
        const utils = utilsInit(apiKey)
        return {
            getByPetition: async function (petitionID, signatureID) { return await utils.getResource(`petitions/${petitionID}/signatures/${signatureID}`) },
            getByPerson: async function (personID, signatureID) { return await utils.getResource(`people/${personID}/signatures/${signatureID}`) },
            create: async function (petitionID, payload) { return await utils.postResource(`petition/${petitionID}/signatures`, payload) },
            update: async function (petitionID, signatureID, payload) { return await utils.updateResource(`petitions/${petitionID}/signatures/${signatureID}`, payload) }
        }
}
export default signatureInit