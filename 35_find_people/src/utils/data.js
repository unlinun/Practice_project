import level1 from "../images/cartoon1.jpeg";
import level2 from "../images/cartoon2.jpeg";
import level3 from "../images/cartoon3.jpeg";
import character1 from "../images/卡卡西.png";
import character2 from "../images/飛影.png";
import character3 from "../images/悟空.png";
import character4 from "../images/大比鳥.png";
import character5 from "../images/巴大蝶.png";
import character6 from "../images/水箭龜.png";
import character7 from "../images/akira.png";
import character8 from "../images/風暴兵.webp";
import character9 from "../images/皮卡丘.png";

export const levelData = [
  {
    level: 1,
    title: "girl's room",
    imageURL: level1,
    characters: [
      {
        name: "卡卡西",
        found: false,
        imageURL: character1,
        yCoords: [13, 14, 15, 16, 17],
        xCoords: [8, 9, 10],
      },
      {
        name: "飛影",
        found: false,
        imageURL: character2,
        yCoords: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
        xCoords: [5, 6, 7, 8, 9, 10, 11],
      },
      {
        name: "悟空",
        found: false,
        imageURL: character3,
        yCoords: [7, 8, 9, 10, 11],
        xCoords: [24, 25, 26],
      },
    ],
  },
  {
    level: 2,
    title: "pokemon world",
    imageURL: level2,
    characters: [
      {
        name: "大比鳥",
        found: false,
        imageURL: character4,
        xCoords: [25, 26, 27, 28, 29, 30, 31],
        yCoords: [36, 37, 38, 39, 40, 41, 42, 43],
      },
      {
        name: "巴大蝶",
        found: false,
        imageURL: character5,
        xCoords: [9, 10, 11, 12, 13],
        yCoords: [9, 10, 11, 12, 13, 14],
      },
      {
        name: "水箭龜",
        found: false,
        imageURL: character6,
        xCoords: [19, 20, 21, 22, 23, 24],
        yCoords: [18, 19, 20, 21, 22, 23],
      },
    ],
  },
  {
    level: 3,
    title: "boy's room",
    imageURL: level3,
    characters: [
      {
        name: "阿基拉",
        found: false,
        imageURL: character7,
        xCoords: [9, 10],
        yCoords: [17, 18],
      },
      {
        name: "帝國風暴兵",
        found: false,
        imageURL: character8,
        xCoords: [19, 20, 21, 22],
        yCoords: [27, 28, 29, 30],
      },
      {
        name: "皮卡丘",
        found: false,
        imageURL: character9,
        xCoords: [0, 1],
        yCoords: [34, 35],
      },
    ],
  },
];
