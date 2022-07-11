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
        brand: "RAZER",
        name: "G PRO Wireless Gaming Mouse",
        salePrice: 59.00,
        originalPrice: 69.00,
        productImage: AZ1_DEATHADDERV2,
        brandImage: a,
        specifications: [
            {
                title: "properties",
                content: {
                    battery: 60,
                    connection: "wireless",
                    maxSensitivity: 25.600,
                    maxSpeed: 400
                }
            },
            {
                title: "Dimensions",
                content: {
                    width: 2.50,
                    height: 4.92,
                    depth: 1.57,
                    weight: 80,
                }
            },
        ]
    },
    {
        brand: "RAZER",
        name: "G PRO Wireless Gaming Mouse",
        salePrice: 59.00,
        originalPrice: 69.00,
        productImage: AZ1_DEATHADDERV2,
        brandImage: logitech,
        specifications: [
            {
                title: "properties",
                content: {
                    battery: 60,
                    connection: "wireless",
                    maxSensitivity: 25.600,
                    maxSpeed: 400
                }
            },
            {
                title: "Dimensions",
                content: {
                    width: 2.50,
                    height: 4.92,
                    depth: 1.57,
                    weight: 80,
                }
            },
        ]
    },
    {
        brand: "RAZER",
        name: "G PRO Wireless Gaming Mouse",
        salePrice: 59.00,
        originalPrice: 69.00,
        productImage: AZ1_DEATHADDERV2,
        brandImage: logitech,
    },
    {
        brand: "RAZER",
        name: "G PRO Wireless Gaming Mouse",
        salePrice: 59.00,
        originalPrice: 69.00,
        productImage: AZ1_DEATHADDERV2,
        brandImage: logitech,
    },
    {
        brand: "RAZER",
        name: "G PRO Wireless Gaming Mouse",
        salePrice: 59.00,
        originalPrice: 69.00,
        productImage: AZ1_DEATHADDERV2,
        brandImage: logitech,
    }
]

export { settings, productsInHero , brandLists};
