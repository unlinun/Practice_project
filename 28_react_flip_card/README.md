# React Flip Cards
![demo](https://user-images.githubusercontent.com/100119316/230274023-84f01e15-e379-4136-8d43-516dc704be1e.gif)


## Project overview

1. 當載入畫面時，有選擇視窗讓人可以選擇 level
2. 顯示最高得分與當前得分，如果得分高於最高得分，則取代最高得分成為新的最高得分
3. 點擊卡片一下，會判斷是否跟上一張卡片一樣，如果一樣則遊戲結束，如果不一樣，則得分 +1
4. 若點擊的卡片與上一張不一樣，則將卡片再隨機擺放位置

## Project flow

1. 當程式載入時，顯示最高分: 0, 當前得分: 0, 遊戲開始: false, 遊戲結束: true, level: null, 卡片列表: [], 選擇的卡片數: 0, 當前選擇的卡片: ""
2. 首先載入畫面，會先呈現預設值
3. 當玩家選擇 selector 中的 level (onChange) ，並按下 start 按鈕時，會觸發 onClick 的事件
   1. 將遊戲開始的狀態改為 true
   2. 將遊戲結束的狀態改為 false
   3. 將 select 設為 disable
   4. 將 level 設為 selector 的 value。
   5. 取得 level 的值，使用 random 的方式來創建一組卡片陣列（包含 id, img）並儲存於卡片列表中
4. 將卡片列表的數據傳給 Card 組件，Card 組件 render 出卡片列表
5. 如果點擊卡片
   1. 選擇的卡片數 +1
   2. 判斷跟上一張卡片的 id 是否一樣
      - 如果一樣，則判斷當前分數是否高於最高分，若高，則取代最高分數，並顯示遊戲結束視窗，遊戲結束設為 true, 遊戲開始設為 false, 將遊戲設定為預設值（但不能重設最高分）。
      - 如果不一樣，則當前得分 +1
   3. 判斷是否已經將所有卡片選完，如果沒有，將卡片列表再次隨機渲染，進行下一次選擇，如果已經選完，則遊戲結束

### 補充資料

1. 如何將陣列中的物件隨機排列? 使用 `Array.splice()`

   ```
    const shuffleCards = (prevCards) => {
    let cards = [...prevCards];
    const length = cards.length;
    let shuffled = [];
    let r;

    for (let i = 0; i < length; i += 1) {
    r = getRandomIndex(cards.length);
    shuffled = [...shuffled, ...cards.splice(r, 1)];
    }

    return shuffled;
    };
   ```
