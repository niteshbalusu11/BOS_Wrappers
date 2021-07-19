import { getAccountingReport } from "balanceofsatoshis/balances/index.js"



export default async(lnd, request, logger) => {
    const response = await (
      getAccountingReport({
        logger,
        request,
        category: 'chain-fees',
        lnd: (await lnd.authenticatedLnd({ logger })).lnd,
      })
    );
  
    return response;
  }


