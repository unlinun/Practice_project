import flower01 from "../images/韓式捧花-白綠.jpeg";
import flower02 from "../images/韓式捧花-紅橘.jpeg";
import flower03 from "../images/韓式捧花-粉白.jpeg";
import flower04 from "../images/韓式捧花-粉黃.jpeg";
import flower05 from "../images/韓式捧花-粉橘.jpeg";
import flower06 from "../images/韓式捧花-紫.jpeg";
import flower07 from "../images/韓式花束-藍白.jpeg";
import flower08 from "../images/韓式花束-白粉.jpeg";
import flower09 from "../images/韓式花束-白綠.jpeg";
import planting01 from "../images/塊根植物-象牙宮.jpeg";
import planting02 from "../images/塊根植物-龜甲龍.jpeg";
import planting03 from "../images/植物盆栽-龜背芋.jpeg";
import planting04 from "../images/植物盆栽-琴葉榕.jpeg";
import planting05 from "../images/植物盆栽-天堂鳥.jpeg";
import planting06 from "../images/植物盆栽-虎尾蘭.jpeg";
import planting07 from "../images/植物盆栽-印度榕.jpeg";

import mainPage00 from "../images/首頁資訊00.webp";
import mainPage01 from "../images/首頁資訊01.webp";
import mainPage02 from "../images/首頁資訊02.jpeg";
import mainPage03 from "../images/首頁資訊03.jpeg";

export const products = [
  {
    id: "TW001",
    category: "flower",
    productName: "韓式捧花-白綠",
    image: flower01,
    price: 800,
    quantity: 5,
    like: false,
    sale: false,
  },
  {
    id: "TW002",
    category: "flower",
    productName: "韓式捧花-紅橘",
    image: flower02,
    price: 1000,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW003",
    category: "flower",
    productName: "韓式捧花-粉白",
    image: flower03,
    price: 1000,
    quantity: 2,
    like: false,
    sale: false,
  },
  {
    id: "TW004",
    category: "flower",
    productName: "韓式捧花-粉黃",
    image: flower04,
    price: 800,
    quantity: 10,
    like: false,
    sale: true,
  },
  {
    id: "TW005",
    category: "flower",
    productName: "韓式捧花-粉橘",
    image: flower05,
    price: 800,
    quantity: 3,
    like: false,
    sale: false,
  },
  {
    id: "TW006",
    category: "flower",
    productName: "韓式捧花-紫",
    image: flower06,
    price: 1000,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW007",
    category: "flower",
    productName: "韓式花束-藍白",
    image: flower07,
    price: 2800,
    quantity: 10,
    like: false,
    sale: true,
  },
  {
    id: "TW008",
    category: "flower",
    productName: "韓式花束-白粉",
    image: flower08,
    price: 3600,
    quantity: 1,
    like: false,
    sale: false,
  },
  {
    id: "TW009",
    category: "flower",
    productName: "韓式花束-白綠",
    image: flower09,
    price: 2800,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW010",
    category: "planting",
    productName: "塊根植物-象牙宮",
    image: planting01,
    price: 1600,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW011",
    category: "planting",
    productName: "塊根植物-龜甲龍",
    image: planting02,
    price: 1600,
    quantity: 0,
    like: false,
    sale: false,
  },
  {
    id: "TW012",
    category: "planting",
    productName: "植物盆栽-龜背芋",
    image: planting03,
    price: 2000,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW013",
    category: "planting",
    productName: "植物盆栽-琴葉榕",
    image: planting04,
    price: 2000,
    quantity: 1,
    like: false,
    sale: true,
  },
  {
    id: "TW014",
    category: "planting",
    productName: "植物盆栽-天堂鳥",
    image: planting05,
    price: 1800,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW015",
    category: "planting",
    productName: "植物盆栽-虎尾蘭",
    image: planting06,
    price: 1200,
    quantity: 10,
    like: false,
    sale: false,
  },
  {
    id: "TW016",
    category: "planting",
    productName: "植物盆栽-印度榕",
    image: planting07,
    price: 1800,
    quantity: 3,
    like: false,
    sale: true,
  },
];

export const mainPage = [
  {
    id: "main-00",
    title: "冬日特價，打造你的植物生活",
    description: "開啟你的綠色之旅",
    image: mainPage00,
    page: "sale",
  },
  {
    id: "main-01",
    title: "屬於你的家中綠植感",
    description: "懶懶的，不想澆水，也沒關係",
    image: mainPage01,
    page: "planting",
  },
  {
    id: "main-02",
    title: "塊根的醜美，只想讓你懂",
    description: "醜得美麗，醜得可愛，怪美塊根植物",
    image: mainPage02,
    page: "planting",
  },
  {
    id: "main-03",
    title: "在充滿花的冬日做一場白日夢",
    description: "經典手捧花、韓系花束，只獻給你",
    image: mainPage03,
    page: "flowers",
  },
];
