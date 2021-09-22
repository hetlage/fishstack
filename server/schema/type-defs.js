const {gql} = require("apollo-server");

const typeDefs = gql`
  type Lookup {
    WhoisRecord: WhoisRecord! 
  }
  
  type WhoisRecord {
    createdDate: String!
    updatedDate: String!
    expiresDate: String!
    dataError: String! 
    domainName: String!
    registrant: Registrant!
    administrativeContact: AdministrativeContact!
    billingContact: BillingContact!
    technicalContact: TechnicalContact! 
    zoneContact: ZoneContact!
    nameServers: NameServers!
    status: String!
    rawText: String!
    parseCode: String!
    strippedText: String!
    audit: Audit!
    customField1Name: String!
    customField1Value: String!    
    customField2Name: String!
    customField2Value: String!
    customField3Name: String!
    customField3Value: String!
    registrarName: String!
    registrarIANAID: String!
    whoisServer: String!
    createdDateNormalized: String!
    updatedDateNormalized: String!
    expiresDateNormalized: String!
    registryData: RegistryData!
    domainAvailability: String!
    contactEmail: String!
    estimatedDomainAge: Int!
    ips: String!
  }

  type Registrant {
    name: String!
    organization: String!
    street1: String!
    street2: String!
    street3: String!
    street4: String!
    city: String!
    state: String!
    postalCode: Int!
    country: String!
    countryCode: String!
    email: String!
    telephone: String!
    telephoneExt: String!
    fax: String!
    faxExt: String!
    rawText: String!
    unparsable: String!
  }
  
  type AdministrativeContact {
    name: String!
    organization: String!
    street1: String!
    street2: String!
    street3: String!
    street4: String!
    city: String!
    state: String!
    postalCode: Int!
    country: String!
    countryCode: String!
    email: String!
    telephone: String!
    telephoneExt: String!
    fax: String!
    faxExt: String!
    rawText: String!
    unparsable: String!
  }
  
  type BillingContact {
    name: String!
    organization: String!
    street1: String!
    street2: String!
    street3: String!
    street4: String!
    city: String!
    state: String!
    postalCode: Int!
    country: String!
    countryCode: String!
    email: String!
    telephone: String!
    telephoneExt: String!
    fax: String!
    faxExt: String!
    rawText: String!
    unparsable: String!
  }
  
  type TechnicalContact { 
    name: String!
    organization: String!
    street1: String!
    street2: String!
    street3: String!
    street4: String!
    city: String!
    state: String!
    postalCode: Int!
    country: String!
    countryCode: String!
    email: String!
    telephone: String!
    telephoneExt: String!
    fax: String!
    faxExt: String!
    rawText: String!
    unparsable: String!
  }
  
  type ZoneContact {
    name: String!
    organization: String!
    street1: String!
    street2: String!
    street3: String!
    street4: String!
    city: String!
    state: String!
    postalCode: Int!
    country: String!
    countryCode: String!
    email: String!
    telephone: String!
    telephoneExt: String!
    fax: String!
    faxExt: String!
    rawText: String!
    unparsable: String!
  }
    
  type NameServers {
    rawText: String!
    hostNames: [String!]! 
  }  
  
  type Audit {
    createdDate: String!
    updatedDate: String!
  }
  
  type RegistryData {
    createdDate: String!
    updatedDate: String!
    expiresDate: String!
    domainName: String!
  }
    
  type Query {
    getRecord(domain: String!): Lookup!
  }
`

module.exports = {typeDefs};