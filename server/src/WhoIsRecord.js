const {RESTDataSource} = require("apollo-datasource-rest");

class WhoIsRecord extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://www.whoisxmlapi.com/whoisserver/WhoisService";
    }

    async getRecord(domain = "google.com") {
        return this.get(`/?apiKey=${process.env.apiKey}&outputFormat=JSON&domainName=${domain}`);
    }

}

module.exports = WhoIsRecord;
