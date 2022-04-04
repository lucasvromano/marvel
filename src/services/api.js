
import md5 from 'md5';

const publickey = '7da7bd40168e15ac0d15d2a2794e3dfc';
const privatekey = '73b9212d73ad1127e19a7294b440e0ac8295f3fa';
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5(stringToHash);
const limit = 50;

export const getCharactersApi = async () => {
  const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  const url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publickey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getCharacterByNameApi = async name => {
  const baseUrl = `https://gateway.marvel.com/v1/public/characters`;
  const url = `${baseUrl}?limit=${limit}&nameStartsWith=${name}&ts=${ts}&apikey=${publickey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getComicsApi = async id => {
  const baseUrl = `http://gateway.marvel.com/v1/public/characters/${id}/comics`;
  const url = `${baseUrl}?limit=${limit}&ts=${ts}&apikey=${publickey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const getCharacterByIdApi = async id => {
  const baseUrl = `http://gateway.marvel.com/v1/public/characters/${id}`;
  const url = `${baseUrl}?ts=${ts}&apikey=${publickey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}