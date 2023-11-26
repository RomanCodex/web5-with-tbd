import {DidIonMethod, DidKeyMethod, DidDhtMethod } from "@web5/dids";

async function main() {
    const myKeyDid = await DidKeyMethod.create('key');
    // const myIonDid = await DidIonMethod.create('ion');
    const myDhtDid = await DidDhtMethod.create('dht');

    console.log(myKeyDid);
    // console.log(myIonDid);
    console.log(myDhtDid);
}

main();