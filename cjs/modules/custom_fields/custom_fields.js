module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            get: async function () {
                return await utils.getResource(`metadata/custom_fields`)
            }
        }
    }
}