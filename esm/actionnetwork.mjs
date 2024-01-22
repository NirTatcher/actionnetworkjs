import advocacyCampaignInit from "./modules/advocacy_campaigns/advocacy_campaign.mjs"
import advocacyCampaignsInit from "./modules/advocacy_campaigns/advocacy_campaigns.mjs"
import attendacneInit from "./modules/attendances/attendance.mjs"
import attendacnesInit from "./modules/attendances/attendances.mjs"
import campaignInit from "./modules/campaigns/campaign.mjs"
import campaignsInit from "./modules/campaigns/campaigns.mjs"
import customFieldsInit from "./modules/custom_fields/custom_fields.mjs"
import donationInit from "./modules/donations/donation.mjs"
import donationsInit from "./modules/donations/donations.mjs"
import embedsInit from "./modules/embeds/embed.mjs"
import eventCampaignInit from "./modules/event_campaigns/event_campaign.mjs"
import eventCampaignsInit from "./modules/event_campaigns/event_campaigns.mjs"
import eventInit from "./modules/events/event.mjs"
import eventsInit from "./modules/events/events.mjs"
import formInit from "./modules/forms/form.mjs"
import formsInit from "./modules/forms/forms.mjs"
import fundraisingPageInit from "./modules/fundraising_pages/fundraising_page.mjs"
import fundraisingPagesInit from "./modules/fundraising_pages/fundraising_pages.mjs"
import itemInit from "./modules/items/item.mjs"
import itemsInit from "./modules/items/items.mjs"
import listInit from "./modules/lists/list.mjs"
import listsInit from "./modules/lists/lists.mjs"
import messageInit from "./modules/messages/message.mjs"
import messagesInit from "./modules/messages/messages.mjs"
import metadataInit from "./modules/metadata/metadata.mjs"
import outreachInit from "./modules/outreaches/outreach.mjs"
import outreachesInit from "./modules/outreaches/outreaches.mjs"
import peopleInit from "./modules/people/people.mjs"
import personInit from "./modules/people/person.mjs"
import petitionInit from "./modules/petitions/petition.mjs"
import petitionsInit from "./modules/petitions/petitions.mjs"
import queriesInit from "./modules/queries/queries.mjs"
import queryInit from "./modules/queries/query.mjs"
import signatureInit from "./modules/signatures/signature.mjs"
import signaturesInit from "./modules/signatures/signatures.mjs"
import submissionInit from "./modules/submissions/submission.mjs"
import submissionsInit from "./modules/submissions/submissions.mjs"
import taggingInit from "./modules/taggings/tagging.mjs"
import taggingsInit from "./modules/taggings/taggings.mjs"
import tagInit from "./modules/tags/tag.mjs"
import tagsInit from "./modules/tags/tags.mjs"
import wrapperInit from "./modules/wrappers/wrapper.mjs"
import wrappersInit from "./modules/wrappers/wrappers.mjs"

const ActionNetwork = (apiKey) => {

    const advocacyCampaign = advocacyCampaignInit(apiKey)
    const advocacyCampaigns = advocacyCampaignsInit(apiKey)

    const attendacne = attendacneInit(apiKey)
    const attendacnes = attendacnesInit(apiKey)

    const campaign = campaignInit(apiKey)
    const campaigns = campaignsInit(apiKey)

    const customFields = customFieldsInit(apiKey)

    const donation = donationInit(apiKey)
    const donations = donationsInit(apiKey)

    const embeds = embedsInit(apiKey)

    const eventCampaign = eventCampaignInit(apiKey)
    const eventCampaigns = eventCampaignsInit(apiKey)

    const event = eventInit(apiKey)
    const events = eventsInit(apiKey)

    const form = formInit(apiKey)
    const forms = formsInit(apiKey)

    const fundraisingPage = fundraisingPageInit(apiKey)
    const fundraisingPages = fundraisingPagesInit(apiKey)

    const item = itemInit(apiKey)
    const items = itemsInit(apiKey)

    const list = listInit(apiKey)
    const lists = listsInit(apiKey)

    const message = messageInit(apiKey)
    const messages = messagesInit(apiKey)

    const metadata = metadataInit(apiKey)

    const outreach = outreachInit(apiKey)
    const outreaches = outreachesInit(apiKey)

    const person = personInit(apiKey)
    const people = peopleInit(apiKey)

    const petition = petitionInit(apiKey)
    const petitions = petitionsInit(apiKey)

    const query = queryInit(apiKey)
    const queries = queriesInit(apiKey)

    const signature = signatureInit(apiKey)
    const signatures = signaturesInit(apiKey)

    const submission = submissionInit(apiKey)
    const submissions = submissionsInit(apiKey)

    const tagging = taggingInit(apiKey)
    const taggings = taggingsInit(apiKey)

    const tag = tagInit(apiKey)
    const tags = tagsInit(apiKey)

    const wrapper = wrapperInit(apiKey)
    const wrappers = wrappersInit(apiKey)

   
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
export default ActionNetwork

