module.exports = {
    init(apiKey) {
        const utils = require("../utils/utils").init(apiKey)
        return {
            getByEvent: async function (eventID, attendanceID) { return await utils.getResource(`events/${eventID}/attendances/${attendanceID}`) },
            getByPerson: async function (personID, attendanceID) { return await utils.getResource(`people/${personID}attendances/${attendanceID}`) },
            create: async function (eventID, payload) { return await utils.postResource(`events/${eventID}/attendances`, payload) },
            update: async function (eventID, payload) { return await utils.updateResource(`events/${eventID}/attendances`, payload) }
        }
    }
}