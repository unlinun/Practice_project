# calculator 計算機

## Project issue 整體項目議題

1. 使用者需要可以變換主題，一共有三種主題
2. 主題顏色需要先依據該使用者電腦的主題來做為預設值(ex: dark mode)
3. 使用者需要可以使用加、減、乘、除，以及％的功能
4. 計算機尺寸可以依據使用者的尺寸來做調整

## Solution 架構問題整體

### 主題的變換

1.  如何監聽使用者的模式?

    - `prefers-color-scheme`
    - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

    ```
    @media (prefers-color-scheme: dark) {
    .day.dark-scheme   { background:  #333; color: white; }
    .night.dark-scheme { background: black; color:  #ddd; }
    }

    @media (prefers-color-scheme: light) {
    .day.light-scheme   { background: white; color:  #555; }
    .night.light-scheme { background:  #eee; color: black; }
    }

    ```

    - 若是使用 JS 來監聽

    ```
    window.matchMedia(`(prefers-color-scheme: light)`).matches
    ```

2.  如何建立主題變換按鈕(3 state switch)？
    - 使用 `<radio>` / `checkbox` 來作為基本架構
    - https://webcodespace.com/how-to-create-a-three-state-toggle-switch-using-html-css-and-javascript
3.  使用 JS 來監聽使用者的點按模式（點擊變換主題）

### 計算機的功能架構

1.  整體 layout 的建構
    - 使用 grid 來作為整體的 layout
2.  計算機的邏輯
    - https://freshman.tech/calculator/

### 響應式設計

1.  依據使用者的裝置來變換計算機的樣式
2.  正確的 html tag 來創造一個無障礙的網路使用環境(including screen reader users)
    - https://segmentfault.com/a/1190000039079630
    - https://accessibility.blog.gov.uk/2016/07/22/using-the-fieldset-and-legend-elements/

### 補充知識點

1. (使用螢幕瀏覽器的使用者) screen readers get most of the information they need from the HTML code of the page. The browser takes the HTML code and converts it into accessible information that can be used by assistive technologies like screen readers.
2. Using the `<fieldset>` and `<legend>` elements. These elements work together to tell screen readers that a group of form fields relate to each other, and to provide a label for the group.
