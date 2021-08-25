# color-detector

**color-detector** is an Javascript library to get all the HTML colors (256 colors) in standerd formts. (hex, rgb, hsl and simple name).

This library helps you to filter through any type of standard color format and find you all other details of it.

> npm install color-detector --save

## Usage

    // import the library
    const {
        accessFromId,
        accessFromName,
        accessFromHexString,
        accessColorFromRGB,
        accessColorFromHSL
    } = require('color-detector');

    (async () => {
        try {

        // get color from name
        const resultFromName = await accessFromName('Green');
        console.log('result from name :', resultFromName);

        // get color from hex
        const resultFromHex = await accessFromHexString('#000000');
        console.log('result from Hex :', resultFromHex);

        // get color from RGB
        const resultFromRGB = await accessColorFromRGB({
            r: 128,
            g: 0,
            b: 128,
        });
        console.log('result from RGB :', resultFromRGB);

        // get color from HSL
        const resultFromHSL = await accessColorFromHSL({
            h: 0,
            s: 0,
            l: 75,
        });
        console.log('result from HSL :', resultFromHSL);

        // get color from ID
        const resultFromId = await accessFromId(10);
        console.log('result from Id :', resultFromId);

    } catch (error) {
        console.log(error);
    }
    })();

Result :-

    result from name : {
      colorId: 2,
      hexString: '#008000',
      rgb: { r: 0, g: 128, b: 0 },
      hsl: { h: 120, s: 100, l: 25 },
      name: 'Green'
    }
    result from Hex : {
      colorId: 0,
      hexString: '#000000',
      rgb: { r: 0, g: 0, b: 0 },
      hsl: { h: 0, s: 0, l: 0 },
      name: 'Black'
    }
    result from RGB : {
      colorId: 5,
      hexString: '#800080',
      rgb: { r: 128, g: 0, b: 128 },
      hsl: { h: 300, s: 100, l: 25 },
      name: 'Purple'
    }
    result from HSL : {
      colorId: 7,
      hexString: '#c0c0c0',
      rgb: { r: 192, g: 192, b: 192 },
      hsl: { h: 0, s: 0, l: 75 },
      name: 'Silver'
    }
    result from Id : {
      colorId: 10,
      hexString: '#00ff00',
      rgb: { r: 0, g: 255, b: 0 },
      hsl: { h: 120, s: 100, l: 50 },
      name: 'Lime'
    }

## Reference

The colors which are avaible in the library is refered from [jonasjacek.github.io/colors](https://jonasjacek.github.io/colors/)

## Licence

(The MIT License) Copyright (c) 2021 [kmkasunmadushanka@gmail.com](mailto:kmkasunmadushanka@gmail.com)
