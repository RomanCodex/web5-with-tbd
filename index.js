import { Web5 } from '@web5/api';

import { webcrypto } from "node:crypto";
//@ts-ignore
if (!globalThis.crypto) globalThis.crypto = webcrypto;


const { web5, did: myDid } = await Web5.connect();

const { record } = await web5.dwn.records.create({
    data: 'Hello, Web5!',
    message: {
      dataFormat: 'text/plain',
    },
  });

  const readResult = await record.data.text();

  const updateResult = await record.update({
    data: 'Hello, Web5! I am updated.',
  });

//   const deleteResult = await record.delete();

  console.log("updateResult", updateResult);