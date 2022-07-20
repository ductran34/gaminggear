/*=========== RAZER PRODUCT IMAGE ===============*/
import az1 from "../data/mouses/razer/az1_razer_1.png";
import aerox3 from "../data/mouses/steelseries/aerox3/aerox3_steelseries_1.png";
import g305 from "../data/mouses/logitech/g305/g305_logitech_1.png";

import cloud from "../data/headsets/hyperx/cloud_hyperx_1.png";
import arctis9 from "../data/headsets/steelseries/arctis9/arctis9_steelseries_1.png";
import g733 from "../data/headsets/logitech/g733/g733_logitech_1.png";

import enki from "../data/chairs/razer/enki/pink/enki_razer_pink_1.png";
import rv131 from "../data/chairs/dxracer/rv131/rv131_dxracer_1.png";
import fd01 from "../data/chairs/dxracer/fd01/red/fd01_dxracer_1.png";

import g915 from "../data/keyboards/logitech/g915_logitech_1.png";
import apexpro from "../data/keyboards/steelseries/apexpro/apex_steelseries_1.png";
import k8 from "../data/keyboards/keychron/k8/k8_keychron_1.png";
//import logitech from "../data/brands/1.png";

// BRAND LIST FULL LOGO
import razer_full from "../data/brands/razer_full.png";
import corsair_full from "../data/brands/corsair_full.png";
import hyperx_full from "../data/brands/hyperx_full.png";
import logitech_full from "../data/brands/logitech_full.png";
import dxracer_full from "../data/brands/dxracer_full.png";
import steelseries_full from "../data/brands/steelseries_full.png";
import playstation_full from "../data/brands/playstation_full.png";
import xbox_full from "../data/brands/xbox_full.png";
// BRAND LIST LOGO
import razer from "../data/brands/razer.png";
import corsair from "../data/brands/corsair.png";
import hyperx from "../data/brands/hyperx.png";
import logitech from "../data/brands/logitech.png";
import dxracer from "../data/brands/dxracer.png";
import steelseries from "../data/brands/steelseries.png";
import playstation from "../data/brands/playstation.png";
import xbox from "../data/brands/xbox.png";

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

var settings = {
  primaryColor: "#fb4959", //fb4959
  whiteColor: "#eae7dd",
  starColor: "#FFD853",
};


const productAttribute = [
    {
        label: "BRAND",
        type: "option",
        options: [ "Logitech", "Razer", "Corsair", "Hyperx", "Dxracer", "Steelseries"]
    },
    {
        label: "CATEGORY",
        type: "option",
        options : ["Mouse", "Keyboard","Headsets","Chairs"]
    },
    {
        label: "ORIGINAL PRICE",
        type: "number"
    },
    {
        label: "PRODUCT NAME",
        type: "text"
    },
    {
        label: "SHORT NAME",
        type: "text"
    },
    {
        label: "SALE PRICE",
        type: "number"
    },
    {
        label: "Description",
        type: "textarea"
    },
]

const brandLists = [
  {
    brandName: "razer",
    brandImage: razer_full,
    brandLogo: razer,
  },
  {
    brandName: "corsair",
    brandImage: corsair_full,
    brandLogo: corsair
  },
  {
    brandName: "hyperx",
    brandImage: hyperx_full,
    brandLogo: hyperx
  },
  {
    brandName: "logitech",
    brandImage: logitech_full,
    brandLogo: logitech
  },
  {
    brandName: "dxracer",
    brandImage: dxracer_full,
    brandLogo: dxracer
  },
  {
    brandName: "steelseries",
    brandImage: steelseries_full,
    brandLogo: steelseries
  },
  {
    brandName: "playstation",
    brandImage: playstation_full,
    brandLogo: playstation
  },
  {
    brandName: "xbox",
    brandImage: xbox_full,
    brandLogo: xbox
  },
];

const productsInHero = [
    {
        brand: "rzaer",
        name: "AZ1 Deathadder Pro",
        shortName: "AZ1",
        salePrice: 59.99,
        originalPrice: 69.99,
        productImage: az1,
        brandImage: razer,
        brandLogo: razer,
        category: "mouse",
        specifications: [
            {
                title: "Sensitivity",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 650,
                    maxAcceleration: 50,
                    lifecycle: "70 Million Clicks",
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "8"
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "steelseries",
        name: "Aerox 3 2022 Edition",
        shortName: "Aerox",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: aerox3,
        brandImage: steelseries,
        category: "mouse",
        specifications: [
            {
                title: "Sensitivity",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 300,
                    maxAcceleration: 35,
                    lifecycle: "80 Million Clicks",
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "6"
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "logitech",
        name: "G503 HERO",
        shortName: "G503",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: g305,
        brandImage: logitech,
        category: "mouse",
        specifications: [
            {
                title: "Sensitivity",
                content: {
                    maxSensitivity: 20000,
                    maxSpeed: 400,
                    maxAcceleration: 40,
                    lifecycle: "80 Million Clicks",
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                    buttons: "9"
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "hyperx",
        name: "HyperX Cloud Core",
        shortName: "cloud",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: cloud,
        brandImage: hyperx,
        category: "headset",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "steelseries",
        name: " Arctis 9 Wireless",
        shortName: "arctis9",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: arctis9,
        brandImage: steelseries,
        category: "headset",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "logitech",
        name: "G733 Ultra-Lightweight",
        shortName: "g733",
        salePrice: 39.99,
        originalPrice: 59.99,
        productImage: g733,
        brandImage: logitech,
        category: "headset",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "logitech",
        name: "g915 LIGHTSPEED Wireless",
        shortName: "g915",
        salePrice: 129.99,
        originalPrice: 259.99,
        productImage: g915,
        brandImage: logitech,
        category: "keyboard",
        specifications: [
            {
                title: "Switch",
                content: {
                    actuationDistance: 1.5,
                    actuationForce: 50,
                    totalTravelDistance: 2.7,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "steelseries",
        name: "Apex Pro RGB",
        shortName: "apex",
        salePrice: 89.99,
        originalPrice: 199.99,
        productImage: apexpro,
        brandImage: steelseries,
        category: "keyboard",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "keychron",
        name: "K8 Wireless Mechanical",
        shortName: "k8",
        salePrice: 59.99,
        originalPrice: 79.99,
        productImage: k8,
        brandImage: corsair,
        category: "keyboard",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "razer",
        name: "Enki Gaming Chair",
        shortName: "enki",
        salePrice: 399.99,
        originalPrice: 399.99,
        productImage: enki,
        brandImage: razer,
        category: "chair",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "dxracer",
        name: "FD01 Formula Series",
        shortName: "fd01",
        salePrice: 299.99,
        originalPrice: 329.99,
        productImage: fd01,
        brandImage: dxracer,
        category: "chair",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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
        brand: "dxracer",
        name: "RV131 Racing Series",
        shortName: "rv131",
        salePrice: 299.99,
        originalPrice: 399.99,
        productImage: rv131,
        brandImage: dxracer,
        category: "chair",
        specifications: [
            {
                title: "Headphone",
                content: {
                    driver: "40",
                    frequencyResponse: "15Hz-25kHz",
                    sensitivity: 98,
                    impedance: 40,
                }
            },
            {
                title: "Microphone",
                content: {
                    frequencyResponse: "100–6kHz",
                    pattern: "Uni-directional, Noise-cancelling",
                    sensitivity: -46,
                }
            },
            {
                title: "Technical Specifications",
                content: {
                    battery: "None",
                    connection: "wired",
                }
            },
            {
                title: "Physical Specifications",
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

export { settings, productsInHero , brandLists, productAttribute};
