import {gql} from '@apollo/client';

export const GET_WHOIS_RECORD = gql` 
    query getRecord($domain: String!) {
        getRecord(domain: $domain) {
            WhoisRecord 
        }
    }
`