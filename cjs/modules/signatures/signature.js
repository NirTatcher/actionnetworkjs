module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByPetition: async function (petitionID, signatureID) { return await utils.getResource(`petitions/${petitionID}/signatures/${signatureID}`) },
            getByPerson: async function (personID, signatureID) { return await utils.getResource(`people/${personID}/signatures/${signatureID}`) },
            create: async function (petitionID, payload) { return await utils.postResource(`petition/${petitionID}/signatures`, payload) },
            update: async function (petitionID, signatureID, payload) { return await utils.updateResource(`petitions/${petitionID}/signatures/${signatureID}`, payload) }
        }
    }
}