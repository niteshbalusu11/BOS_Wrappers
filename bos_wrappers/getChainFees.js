import {getChainFees} from 'balanceofsatoshis/chain/index.js'

  export default async(lnd, request, logger) => {
    const response = await (
        getChainFees({
        logger,
        request,
        lnd: (await lnd.authenticatedLnd({ logger })).lnd,
      })
    );
  
return response

  }
