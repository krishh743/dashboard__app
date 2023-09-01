import axios from "axios"
import {LOAN_TILES_URL } from '../config/config';

export const PageApi = {
    loadTilesPage: async function (cb, routes, type, payload) {
        await axios.post(LOAN_TILES_URL + routes, payload).then((response) => {
            cb(true, type, response);
        }).catch((err) => {
            cb(false, type, err);
        })
    },

}