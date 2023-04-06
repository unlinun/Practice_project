# Project Overview
![demo](https://user-images.githubusercontent.com/100119316/230272950-4b152ed9-b1e9-4082-9fd0-75c8f48b2df0.gif)

- Project name: Etch-A-Sketch
- Project goal: Build a web site when people hover over the mouse, change the color of sketch board.

## Learning information

1. change range style using "vendor prefix"(瀏覽器引擎前綴) `-webkit-`, `-moz-`:

- css 的 `range input` = `Track` + `Thumb`
- 初始化 range input
  Using four properties:

  - `-webkit-appearance: none;` : 告訴瀏覽器清除預設的樣式 (default styles)
  - `background: transparent;` : 清除預設的在 input 的背景
  - `cursor: pointer;`
  - `width` : 設定全局的 input 寬度
    ```
    input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        background: transparent;
        cursor: pointer;
        width: 15rem;
    }
    ```

- 賦予新的 track 樣式
  為了賦予不同瀏覽器中的 track/ thumb 新的樣式，我們必須給予不同的 pseudo element (偽元素)

  - `::webkit-slider-runnable-track`: 將 Chrome, Safari, Chromium 的 track 成為目標物件
  - `::moz-range-track`: 將 Firefox 的 track 成為目標物件

  ```
  input[type="range"]::-webkit-slider-runnable-track {
    background: #000;
  }
  input[type="range"]::-moz-range-track {
  background: #000;
  }
  ```

- 賦予新的 thumb 樣式

  - `::-webkit-slider-thumb`: 將 Chrome, Safari, Chromium 的 thumb 成為目標物件
  - `::-moz-range-thumb`: 將 Firefox 的 thumb 成為目標物件

  ```
  input[type="range"]::-webkit-slider-thumb {
   -webkit-appearance: none; /* Override default look */
   appearance: none;
   margin-top: -12px; /* Centers thumb on the track */
   background-color: #5cd5eb;
   height: 2rem;
   width: 1rem;
  }

  /***** Firefox *****/
  input[type="range"]::-moz-range-thumb {
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0; /*Removes default border-radius that FF applies*/
    background-color: #5cd5eb;
    height: 2rem;
    width: 1rem;
  }
  ```

- 賦予新的 focus 樣式

  - 移除預設的 focus 樣式 :
    `input[type="range"]:focus { outline:none };`

    ```
    input[type="range"]:focus::-webkit-slider-thumb {
    border: 1px solid #053a5f;
    outline: 3px solid #053a5f;
    outline-offset: 0.125rem;
    }
    ```

1. What is "vendor prefix" (瀏覽器引擎前綴)？

- `-webkit` : Chrome, Safari, Opera
- `-moz-` : firefox
- `-o-` : old version of Opera
- `-ms-` : IE

  https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/
