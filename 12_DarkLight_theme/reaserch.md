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
    - https://hackmd.io/@ouob/SJG_MCcat

3.  如何使用 JS 來進行主題顏色的切換？

    - https://www.pullrequest.com/blog/how-to-implement-dark-mode-with-css-js/
