import { Base64 } from 'js-base64';
export const base64Encode = (str) => {
    if (!str) return
    return Base64.encode(str)
}
export const base64Decode = (str) => {
    if (!str) return null
    return Base64.decode(str)
}

export const jsonToBase64 = (text) => {
    const encodedData = textEncode(JSON.stringify(text))
    return btoa(String.fromCharCode.apply(null, encodedData))
}

export const base64ToJson = (base64EncodedData) => {
    const decodedArray = new Uint8Array(atob(base64EncodedData).split('').map(char => char.charCodeAt(0)));
    return JSON.parse(textDecode(decodedArray))
}

const textEncode = (text) => {
    const encoder = new TextEncoder();
    return encoder.encode(text);
}
const textDecode = (text) => {
    const decoder = new TextDecoder();
    return decoder.decode(text);
}
