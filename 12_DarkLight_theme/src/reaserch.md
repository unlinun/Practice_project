# dark light theme 切換深色模式與淺色模式

## Project issue 整體項目議題

1. 瀏覽器會先依據使用者的預設主題來做改變
2. 須包含三個 toggle，深、預設、淺
3. 樣式需依據深淺色的主題來做調整
4. 整體排版須符合響應式設計(RWD)

## Solution 架構問題整體

### 主題的變換

1.  依據使用者當前的預設主題來自動變換網頁的主題樣式

    - `prefers-color-scheme` 屬於 CSS Media Query,用來檢測用戶是否有將系統的主題色設置為亮色(light mode)或暗色(Dark Mode)。
    - https://hackmd.io/@ouob/SJG_MCcat

2.  如何建立主題變換按鈕(3 state switch)？

    - 使用 `<radio>` 並且配合 `<fieldset>` and `<legend>` 來做到無障礙的使用
    - https://codepen.io/renddrew/pen/bRomab?editors=1100

3.  如何使用 JS 來進行主題顏色的切換？

    - https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/

### 補充資訊

1. 變換主題，使用 react -- https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/
2. fieldset 的使用 -- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
3. 把 aria-hidden="true" 加到元素上會把該元素和它的所有子元素從無障礙樹上移除。這樣做可以通過隱藏下列內容來提升使用輔助技術的用戶體驗：
   - 純裝飾性的內容，如圖標、圖片
   - 重複的內容，如重複的文本
   - 屏幕外或被折疊的內容，如菜單
4. 如果使用 `display-none` 在元素上，則你將無法使用鍵盤操控該元素
5. 無法在 border 上增加漸層色的邊框，如果要使用的話，必須使用`background`來達成

   ```
       background: 邊框顏色 邊框位置/100% 邊框粗細 no-repeat 背景色;
   ```
