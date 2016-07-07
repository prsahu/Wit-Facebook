'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: Q3FHWAGJSDM5WQQBTWWRIRKCDIXLO6PZ,
  FB_PAGE_TOKEN: EAACYbNrvC90BAJTXPj9qXvpQO3F2ooD1omgZBQSRz4U8aezJD9fpQuRstR9TzJi5ebOZBEMEdnVeaAKsINtzNepoZCZATyyiCM1AG3l5JKy02R2my2MMvqlJCdCZAP27yyr5FreFXiDLHi30qJDTTSDr4V6PAfH53ZAGoq8EEfnQZDZD,
  FB_VERIFY_TOKEN: just_do_it,
};
