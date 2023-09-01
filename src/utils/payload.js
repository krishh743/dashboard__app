import CryptoJS from "crypto-js";

const key = process.env.REACT_APP_KEY;
const iv = process.env.REACT_APP_IV;

export const Encryption = (plainText) => {
  const string = JSON.stringify(plainText)
  var encrypt = CryptoJS.AES.encrypt(string, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    KeySize: 256,
    BlockSize: 128,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypt.toString();
}
 export const Decryption = (strToDecrypt) => {
  var decrypt = CryptoJS.AES.decrypt(strToDecrypt, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv),
    mode: CryptoJS.mode.CBC,
    KeySize: 256,
    BlockSize: 128,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypt.toString(CryptoJS.enc.Utf8);
}
