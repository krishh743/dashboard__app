import axios from "axios"
import { DROP_OFF } from '../config/config';

export const serviceApi = {
  dropOffApi: async function (cb, type, payload) {
    await axios.post(DROP_OFF, payload).then((response) => {
      cb(true, type, response);
    }).catch((err) => {
      cb(false, type, err);
    })
  },
}