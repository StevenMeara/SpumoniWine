

import axios from 'axios';

const API_URL = 'http://localhost:8080/'

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

const stripe_Secret_Key = process.env.stripe_Secret_Key
console.log(stripe_Secret_Key)

export default {


    // GET
    get: async (endpoint, config = {}) => {

        const res = await axios.get(API_URL + endpoint, config);
        return res;

    },

    // POST
    post: async (endpoint, data = {}, config = {}) => {

        const res = await axios.post(API_URL + endpoint, data, config);
        return res;

    }


}