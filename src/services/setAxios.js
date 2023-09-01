import { v4 as uuidv4 } from 'uuid';
import { myConfig } from '../config/rootConfig';
import { Decryption, Encryption } from '../utils/payload';


export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
        config => {
                config.baseURL = myConfig.BASE_URL
            config.headers['UUID'] = uuidv4();
            config.headers['Request-Date'] = new Date();
            //config.headers['X-IBM-Client-Id'] = 'd358b7e8-3d97-469c-ad93-e27350ad9b1b';
            //config.headers['X-IBM-Client-Secret'] = 'B4pU4rL7mC7aT1tW6hM8kE4dQ0gP6hM7bO8kK2xH2sP3pT5aJ3';
            config.headers['Access-Control-Allow-Origin'] = '*';
            if (sessionStorage.getItem('jwt')) {
                config.headers['Authorization'] = `Bearer ${sessionStorage.getItem('jwt')}`;
            }
            //##### PAYLOAD ENCRYPTION ######//
            if (config.data) {
                let newPayload = config.data;
                let encryptedData = Encryption(newPayload);
                console.log('API Payload', config.url, config.data)
                config.data = { 'bffData': encryptedData }
            }
            return config;
        },
        httpsAgent => {
            httpsAgent['rejectUnauthorized'] = false;
        },
        err => Promise.reject(err)
    );
    axios.interceptors.response.use(function (res) {
        let decryptedReponse = '';
        if (res?.data?.bffData) {
            decryptedReponse = JSON.parse(Decryption(res?.data?.bffData));
        } else {
            decryptedReponse = res?.data?.d2cResponse;
        }
        console.log('API Success Resp', res, decryptedReponse)
        return decryptedReponse;
    }, function (error) {
        console.log('API Error Resp1', error)
        if (error?.message && !error?.response?.data) {
            return Promise.reject(error);
        }
        const decryptedReponse = JSON.parse(Decryption(error?.response?.data?.bffData));
        console.log('API Error Resp2', decryptedReponse)
        return Promise.reject(decryptedReponse);
    });
}
