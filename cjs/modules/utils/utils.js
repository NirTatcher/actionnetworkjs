module.exports = {
    init(apiKey) {
        const headers = {
            "OSDI-API-Token": apiKey,
            "Content-Type": "application/json",
        }
        const baseURL = "https://actionnetwork.org/api/v2"
        return {
            getResourceCollection: async function (resourcePath, limit = null, perPage = 25, filter = null) {
                try{
                const results = []
                let count = 0
                let page = 1
                do {
                    let path = `${resourcePath}/?page=${page}`
                    if(perPage){
                        path+= `&per_page=${perPage}`
                    }
                    if(filter){
                        path+= `&filter=${filter}`
                    }
                    var responseJson = await this.getResource(path)
                    count += responseJson["_embedded"][Object.keys(responseJson["_embedded"])[0]].length
                    results.push(...responseJson["_embedded"][Object.keys(responseJson["_embedded"])[0]])
                    page+=1
                }
                while (count < responseJson["total_records"] || (limit !== null && count < limit))
                return results
            }
            catch(err){
                console.error(err)
            }
            },
            getResourceCollectionPaginated: async function (resourcePath, page = null, perPage = 25, filter = null) {
                if(page == null)
                    page = 1
                let path = `${resourcePath}/?page=${page}`
                if(perPage){
                    path+= `&per_page=${perPage}`
                }
                if(filter){
                    path+= `&filter=${filter}`
                }
                let responseJson = await this.getResource(path)
                return responseJson
            },
            getResource: async function (resourcePath) {
                let url = `${baseURL}/${resourcePath}`
                let response = await fetch(url, {headers:headers})
                let responseJson = await response.json()
                return responseJson
            },
            postResource: async function (resourcePath, resourcePayload) {
                let url = `${baseURL}/${resourcePath}`
                let headersInner = { headers:headers, body: JSON.stringify(resourcePayload), method: "POST" }
                let response = await fetch(url, headersInner)
                let responseJson = await response.json()
                return responseJson
            },
            updateResource: async function (resourcePath, resourcePayload) {
                let url = `${baseURL}/${resourcePath}`
                let headersInner = { headers:headers, body: JSON.stringify(resourcePayload), method: "PUT" }
                let response = await fetch(url, headersInner)
                let responseJson = await response.json()
                return responseJson
            },
            postResources: async function (resourcePath, resourcePayloads) {
                const results = []
                let url = `${baseURL}/${resourcePath}`
                let headersInner = { headers:headers, body: JSON.stringify(resourcePayload), method: "POST" }
                for (let i = 0; i < resourcePayloads.length; i++) {
                    let response = await fetch(url, headersInner)
                    let responseJson = await response.json()
                    results.push(responseJson)
                }
                return results
            }
        }
    }
}