

import axios from 'axios';

const API_URL = 'http://localhost:8080/'

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