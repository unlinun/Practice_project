# Find people

## project goal

1. 遊戲主畫面會有 Navbar 導航至遊戲主頁以及排名頁面
2. 遊戲主畫面會有三種等級的遊戲卡可以做選擇
3. 當選擇了某一個等級的遊戲卡片，會自動導航到該等級的遊戲頁面
4. 每一張卡片會有三個人物要尋找
5. 當玩家找到全部的角色後，遊戲結束
6. 當玩家尋找超過 300 秒，則遊戲結束
7. 遊戲結束時會顯示輸入名字的輸入框，使該玩家可以將分數計入排名榜中，若該玩家不輸入，則不計入排名

## work flow

1. 使用 react router 建立單頁面的遊戲頁面
2. 當玩家一進入到畫面:

- gameStart = false
- gameOver = true
- level = null
- characters = {}
- levelData = firebase(levels)
- player = {}
- render level cards （呈現三種等級的卡片組件）

3. 當玩家點擊某一等級的卡片:

- gameStart = true
- gameOver = false
- level = levelData 中的 level
- characters = levelData 中的 characters
- 並新增一個玩家，將開始時間存入 startTime , 並新增一個 playerCoords

### 如何找到圖片上點擊位置的座標？

使用 offsetX, offsetY, pageX, pageY , offsetTop, offsetLeft

- https://www.youtube.com/watch?v=Ybb-JFjf7m8
- https://www.chestysoft.com/imagefile/javascript/get-coordinates.asp

### 如何上傳圖片到 firebase?
