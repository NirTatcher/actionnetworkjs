module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function (wrapperID) { return await utils.getResource(`wrappers/${wrapperID}`) },
            create: async function (wrapperID, payload) { return await utils.postResource(`wrappers/${wrapperID}`, payload) },
            update: async function (wrapperID, payload) { return await utils.updateResource(`wrappers/${wrapperID}`, payload) }
        }
    }
}