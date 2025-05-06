/*
WARNING: If you are the interviewee you should not be looking at this file.
*/

import { resolve } from 'path';
import fruits from './fruits.json';

function delayReturn<T>(data: T, ms): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, ms)
  );
}

export const getAvailableFruits = (filter: string): string[] => {
  return fruits.fruits.filter((fruitName) => fruitName.toLocaleLowerCase().startsWith(filter.toLocaleLowerCase()));
};

export const getDelayedAvailableFruits = (filter: string): Promise<string[]> => {
  console.log('Request firing...');
  return delayReturn(getAvailableFruits(filter), 1000);
};

export const getRejectedAvailableFruits = (filter: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    reject('We failed');
  });
};
