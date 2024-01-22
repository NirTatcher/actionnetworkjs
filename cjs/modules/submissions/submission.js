module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByForm: async function (formID, submissionID) { return await utils.getResource(`forms/${formID}/submissions/${submissionID}`) },
            getByPerson: async function (personID, submissionID) { return await utils.getResource(`people/${personID}/submissions/${submissionID}`) },
            create: async function (petitionID, payload) { return await utils.postResource(`petition/${petitionID}/submissions`, payload) },
            update: async function (formID, submissionID, payload) { return await utils.updateResource(`forms/${formID}/submissions/${submissionID}`, payload) }
        }
    }
}