/*=========== RAZER PRODUCT IMAGE ===============*/

import AZ1_DEATHADDERV2 from "../data/mouses/razer/AZ1_DEATHADDERV2.png";
//import logitech from "../data/brands/1.png";

// BRAND LIST LOGO
import razer from "../data/brands/razer.png";
import corsair from "../data/brands/corsair.png";
import hyperx from "../data/brands/hyperx.png";
import logitech from "../data/brands/logitech.png";
import dxaracer from "../data/brands/dxaracer.png";
import steelseries from "../data/brands/steelseries.png";

import a from "../data/brands/1.png";

// STAR FILL 
import star_fill from "../data/asserts/star_fill.png"
import star_unfill from "../data/asserts/star_unfill.png"

// function importAll(r) {
//     let images = {};
//     r.keys().map(item => { images[item.replace('./', '')] = r(item); });
//     return images;
// }

// const images = importAll(require.context('./images', false, '/\.png/'));

// <img src={images['0.png']} />

const settings = {
  primaryColor: "#FE665B",
  whiteColor: "#FFFFFF",
  starColor: "#FFD853",
};

const brandLists = [
  {
    brandImage: razer,
  },
  {
    brandImage: corsair,
  },
  {
    brandImage: hyperx,
  },
  {
    brandImage: logitech,
  },
  {
    brandImage: dxaracer,
  },
  {
    brandImage: steelseries,
  },
];

const productsInHero = [
    {
        brand: "Razer",
        name: "AZ1 DEATHADDER V2",
        shortName: "AZ1",
        salePrice: 59.99,
        originalPrice: 69.99,
        productImage: AZ1_DEATHADDERV2,
        brandImage: a,
        specifications: [
            {
                title: "sensor",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 650,
                    maxAcceleration: 50,
                    lifecycle: "70 Million Clicks",
                }
            },
            {
                title: "properties",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "8"
                }
            },
            {
                title: "Dimensions",
                content: {
                    width: 61.7,
                    height: 127.0,
                    depth: 42.7,
                    weight: 82,
                }
            },
        ]
    },
    {
        brand: "SteelSeries",
        name: "Aerox 3 Gaming Mouse",
        shortName: "Aerox",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: AZ1_DEATHADDERV2,
        brandImage: steelseries,
        specifications: [
            {
                title: "sensor",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 300,
                    maxAcceleration: 35,
                    lifecycle: "80 Million Clicks",
                }
            },
            {
                title: "properties",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "6"
                }
            },
            {
                title: "Dimensions",
                content: {
                    width: 61.7,
                    height: 127.0,
                    depth: 42.7,
                    weight: 59,
                }
            },
        ]
    },
    {
        brand: "SteelSeries",
        name: "Rival 5 Gaming Mouse",
        shortName: "RIval 5",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: AZ1_DEATHADDERV2,
        brandImage: steelseries,
        specifications: [
            {
                title: "sensor",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 400,
                    maxAcceleration: 40,
                    lifecycle: "80 Million Clicks",
                }
            },
            {
                title: "properties",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "9"
                }
            },
            {
                title: "Dimensions",
                content: {
                    width: 61.7,
                    height: 127.0,
                    depth: 42.7,
                    weight: 59,
                }
            },
        ]
    },
]

export { settings, productsInHero , brandLists};
