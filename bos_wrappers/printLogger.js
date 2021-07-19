import {returnOutput} from 'balanceofsatoshis/responses/index.js'

export default async(logger, request, returnValue) => {
    const response = await (
        returnOutput({
        logger,
        request,
        returnValue
      })
    );
  
    return response;
  }