import { createStore } from 'redux'
import { currencyReducer } from './reduceres/currencyReducer.js';

const appStore=createStore(currencyReducer);

export default appStore;