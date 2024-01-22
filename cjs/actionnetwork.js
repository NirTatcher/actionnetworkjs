module.exports = {
    init(apiKey) {
        const advocacyCampaign = require("./modules/advocacy_campaigns/advocacy_campaign").init(apiKey)
        const advocacyCampaigns = require("./modules/advocacy_campaigns/advocacy_campaign").init(apiKey)
        
        const attendacne = require("./modules/attendances/attendance").init(apiKey)
        const attendacnes = require("./modules/attendances/attendances").init(apiKey)

        const campaign = require("./modules/campaigns/campaign").init(apiKey)
        const campaigns = require("./modules/campaigns/campaigns").init(apiKey)

        const customFields = require("./modules/custom_fields/custom_fields").init(apiKey)

        const donation = require("./modules/donations/donation").init(apiKey)
        const donations = require("./modules/donations/donations").init(apiKey)

        const embeds = require("./modules/embeds/embed").init(apiKey)

        const eventCampaign = require("./modules/event_campaigns/event_campaign").init(apiKey)
        const eventCampaigns = require("./modules/event_campaigns/event_campaign").init(apiKey)

        const event = require("./modules/events/event").init(apiKey)
        const events = require("./modules/events/events").init(apiKey)

        const form = require("./modules/forms/form").init(apiKey)
        const forms = require("./modules/forms/forms").init(apiKey)

        const fundraisingPage = require("./modules/fundraising_pages/fundraising_page")
        const fundraisingPages = require("./modules/fundraising_pages/fundraising_pages")

        const item = require("./modules/items/item").init(apiKey)
        const items = require("./modules/items/items").init(apiKey)

        const list = require("./modules/lists/list").init(apiKey)
        const lists = require("./modules/lists/lists").init(apiKey)

        const message = require("./modules/messages/message")
        const messages = require("./modules/messages/messages")

        const metadata = require("./modules/metadata/metadata")

        const outreach = require("./modules/outreaches/outreach")
        const outreaches = require("./modules/outreaches/outreaches")

        const person = require("./modules/people/person").init(apiKey)
        const people = require("./modules/people/people").init(apiKey)

        const petition = require("./modules/petitions/petition")
        const petitions = require("./modules/petitions/petitions")

        const query = require("./modules/queries/query")
        const queries = require("./modules/queries/queries")

        const signature = require("./modules/signatures/signature")
        const signatures = require("./modules/signatures/signatures")

        const submission = require("./modules/submissions/submission")
        const submissions = require("./modules/submissions/submissions")

        const tagging = require("./modules/taggings/tagging")
        const taggings = require("./modules/taggings/taggings")

        const tag = require("./modules/tags/tag")
        const tags = require("./modules/tags/tags")

        const wrapper = require("./modules/wrappers/wrapper")
        const wrappers = require("./modules/wrappers/wrappers")



        const utils = require("./modules/utils/utils").init(apiKey)

        return {
            AdvocacyCampaigns: { advocacyCampaign, advocacyCampaigns },
            Attendacnes: {attendacne, attendacnes},
            Campaigns:{campaign,campaigns},
            CustomFields:{customFields},
            Donations:{donation,donations},
            Embeds:{embeds},
            EventCampaigns:{eventCampaign,eventCampaigns},
            Events:{event,events},
            Forms:{form,forms},
            FundraisingPages:{fundraisingPage,fundraisingPages},
            Items:{items,item},
            Lists:{lists,list},
            Messages:{message,messages},
            Metadata:{metadata},
            Outreaches:{outreach,outreaches},
            People:{person,people},
            Petitions:{petition,petitions},
            Queries:{query,queries},
            Signatures:{signature,signatures},
            Submissions:{submission,submissions},
            Taggings:{tagging,taggings},
            Tags:{tag,tags},
            Wrappers:{wrapper,wrappers}
        }
    }
}

