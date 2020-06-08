import {get} from './http';
export const getMarketData = param => get('/getMarketData',param);