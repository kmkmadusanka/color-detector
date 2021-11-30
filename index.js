const { color_list } = require('./configs/color');

/**
 * Get the color object from id
 * @param {string} id The string
 */
module.exports.accessFromId = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await accessColorFromString('colorId', 'number', id));
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Get the color object from name
 * @param {string} name The string
 */
module.exports.accessFromName = (name) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await accessColorFromString('name', 'string', name));
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Get the color object from hexString
 * @param {string} hex The string
 */
module.exports.accessFromHexString = (hex) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve(await accessColorFromString('hexString', 'string', hex));
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Get the color object from rgb color
 * @param {string} r The string
 * @param {string} g The string
 * @param {string} b The string
 */
module.exports.accessColorFromRGB = ({ r, g, b }) => {
  return new Promise((resolve, reject) => {
    // check for number
    if (
      typeof r === 'number' &&
      r !== null &&
      r < 256 &&
      r >= 0 &&
      typeof g === 'number' &&
      g !== null &&
      g < 256 &&
      g >= 0 &&
      typeof b === 'number' &&
      b !== null &&
      b < 256 &&
      b >= 0
    ) {
      // loop through color array
      for (let index = 0; index < color_list.length; index++) {
        const element = color_list[index];
        // find the matching element
        if (
          element['rgb']['r'] === r &&
          element['rgb']['g'] === g &&
          element['rgb']['b'] === b
        ) {
          resolve(element);
        }
      }
    } else {
      reject(
        'Valid RGB values are required. Those should be positive numbers which is less than 255'
      );
    }
    reject('No color found given RGB values');
  });
};

/**
 * Get the color object from hsl color
 * @param {string} h The string
 * @param {string} s The string
 * @param {string} l The string
 */
module.exports.accessColorFromHSL = ({ h, s, l }) => {
  return new Promise((resolve, reject) => {
    // check for number
    if (
      typeof h === 'number' &&
      h !== null &&
      h < 400 &&
      h >= 0 &&
      typeof s === 'number' &&
      s !== null &&
      s < 400 &&
      s >= 0 &&
      typeof l === 'number' &&
      l !== null &&
      l < 400 &&
      l >= 0
    ) {
      // loop through color array
      for (let index = 0; index < color_list.length; index++) {
        const element = color_list[index];
        // find the matching element
        if (
          element['hsl']['h'] === h &&
          element['hsl']['s'] === s &&
          element['hsl']['l'] === l
        ) {
          resolve(element);
        }
      }
    } else {
      reject(
        `Valid HSL values are required. Those should be positive numbers which is less than 400`
      );
    }
    reject('No color found given HSL values');
  });
};

/**
 * Get the color object from string
 * @param {string} key The string
 * @param {string} variable The string
 */
accessColorFromString = (key, type, variable) => {
  return new Promise((resolve, reject) => {
    // check for type
    if (typeof variable === type && variable !== null) {
      // loop through color array
      for (let index = 0; index < color_list.length; index++) {
        const element = color_list[index];
        // find the matching element
        if (element[key] === variable) {
          resolve(element);
        }
      }
    } else {
      reject(`Valid ${variable} is required. It should be string value`);
    }
    reject(`No color found from given ${variable}`);
  });
};
