module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return { get: async function () { await utils.getResource("metadata") }, }
    }
}