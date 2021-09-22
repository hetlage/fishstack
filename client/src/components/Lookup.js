import React, {useState} from "react";
import {useLazyQuery} from "@apollo/client";
import Button from "react-bootstrap/Button";
import {GET_WHOIS_RECORD} from "../graphql/Queries";

function Lookup() {
    const [whoisLookup, setWhoisLookup] = useState("");
    const [getRecord, {data, error}] = useLazyQuery(GET_WHOIS_RECORD, {variables: {domain: whoisLookup}});

    if (error) return <h4> Error Found</h4>;

    return (
        <div className="whois-lookup">
            <h1>WhoIs Record Search</h1>
            <input
                type="text"
                placeholder="google.com"
                onChange={(event) => {
                    setWhoisLookup(event.target.value);
                }}
            />
            <Button onClick={() => getRecord()}> Search</Button>
            <div className="whoisrecord">
                {data && (
                    <>
                        <h3>WhoIs Report</h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default Lookup;