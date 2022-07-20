/*=========== RAZER PRODUCT IMAGE ===============*/
import AZ1_DEATHADDERV2 from "../data/mouses/razer/az1_razer_1.png";
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
        brand: "Logitech",
        name: "AZ1 Deathadder Pro",
        shortName: "AZ1",
        salePrice: 59.99,
        originalPrice: 69.99,
        productImage: AZ1_DEATHADDERV2,
        brandImage: razer_full,
        brandLogo: razer,
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

export { settings, productsInHero , brandLists, productAttribute};
