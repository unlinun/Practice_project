# Interactive comments section

<img width="2240" alt="demo" src="https://user-images.githubusercontent.com/100119316/230272612-1a1c8cd6-fbcd-4539-8d14-fe14eeee2293.png">


## Project issue 整體項目議題

1. 顯當前使用者的大頭照
2. 使用者可以建立留言，並且會標示該留言是自己的
3. 使用者可以編輯自己的留言
4. 使用者可以刪除自己的留言，並會顯示提示訊息
5. 可以回復其他人的留言
6. 可以按讚其他人的留言
7. 依據回覆的時間來建立留言

## Solution 架構問題整體

### 在 JS 當中讀取 JSON 檔案

1. 在 JavaScript 中使用 fetch() 函式載入 JSON 檔案 -- https://chinese.freecodecamp.org/news/how-to-read-json-file-in-javascript/

### 顯示當前使用者

### 建立留言

1. 使用者自己建立的留言

### 回覆他人的留言，如何使用 ＠ tag 他人

### 編輯留言

### 刪除留言

1. 利用 `e.target` ，並配合 `closest` 來找到當前要刪除的留言

### 補充資訊

1. 變更 svg 的顏色 -- https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element
2. svg Loading 動畫 -- https://codepen.io/nikhil8krishnan/pen/rVoXJa
3. 在 JS module 中導入 JSON 文件 -- https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules/

   ```
   import data from "./data.json" assert { type: "json" };
   // 針對 chrome, 目前還不支援 safari

   ```

4. 建置開發環境 -- Set up a build environment using Babel and Webpack
   https://medium.com/@codingstorytime/set-up-a-build-environment-using-babel-and-webpack-172110681b1
5. 取消 textarea 的拖拉功能

   ```
   textarea {
   resize : none;
   }

   ```

6. 取消 textarea:focus 時的外框色：
   ```
   textarea{
   outline: none;
   }
   ```
