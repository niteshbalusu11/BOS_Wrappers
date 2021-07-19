import express from 'express'
import {logger} from './logger/logger.js'
import lnd from 'balanceofsatoshis/lnd/index.js'
import request from '@alexbosworth/request/index.js'
let accounting = await import('./bos_wrappers/index.js')
let chain = await import('./bos_wrappers/index.js')

const app = express()


app.get('/getAccountingReport', async (req, res, next) => {
  try{
    const returnValue = await accounting.getAccountingReport(lnd, request, logger);
    res.json(returnValue)
  }catch(err){
    next(err)
  }

})


app.get('/getChainFees', async (req, res, next) => {
  try{
    const returnValue = await chain.getChainFees(lnd, request, logger)
    res.json(returnValue)
  } catch(err){
    next(err)
  }


  })

const port = process.env.PORT || 5001

app.listen(port, () => { console.log(`listening on ${port}`) })
