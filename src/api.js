import {cryptoAssets, cryptoData} from './data.js';

export function fakeFetchCrypto() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData);
    }, 1000);
  });
}

export function fakeAssets() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoAssets);
    }, 1000);
  });
}