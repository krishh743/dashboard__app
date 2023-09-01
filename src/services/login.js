import axios from "axios"
import { LOGIN } from '../config/config';

export const loginApi = {
  login: async function (cb, route, type, payload) {
    await axios.post(LOGIN + route, payload).then((response) => {
      cb(true, type, response);
    }).catch((err) => {
      cb(false, type, err);
    })
  },
}