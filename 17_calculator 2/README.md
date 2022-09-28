# Project overview

### Project name : calculator

### Project goal :

1. 當使用者點擊數字時，會動態顯示於計算機的視窗
2. 當使用者點擊運算符號時，會動態顯示於計算機的視窗
3. 當使用者點擊 "=" 時，會計算目前的算式，並且顯示 total 在計算機的視窗
4. 需要有一個按鍵可以讓使用者清除視窗內的值
5. 需要有一個按鍵可以修改使用者的輸入值

### Project solution :

1. 動態顯示使用者輸入之值：
   - 判斷 click event 是否為數字：
     1. 是，判斷是否有 firstNumber：
        1. 是，firstNumber += number;
        2. 否，將第一個數字設為 firstNumber
     2. 否，判斷是否為運算符：
        1. 是，將運算符存於 operator 變數，進入第二層
        2. 否，判斷是否為 "del"
           1. 是，firstNumber.splice(-1)，若 firstNumber.length === 0， return 0
           2. 否，判斷是否為 "reset"
              1. 是，返回預設值 0
              2. 否，判斷是否為 "="
                 1. 是， return firstNumber
   - 判斷 click event 是否為數字：
   1. 是，判斷是否有 secondNumber：
      1. 是，secondNumber += number;
      2. 否，將第二個數設為 secondNumber;
   2. 否，判斷是否為運算符：
      1. 是，判斷是否已經有 operator，
         1. 是，將 firstNumber, secondNumber 做運算
         2. 將 firstNumber 改為 total 的值
         3. 將 secondNumber 改為 "";
         4. operator 改為新的 運算符
      2. 否，判斷是否為 "del"
         1. 是，secondNumber.splice(-1)，若 secondNumber.length === 0， return 0
         2. 否，判斷是否為 "reset"
            1. 是，返回預設值 0
            2. 否，判斷是否為 "="
               1. 是， 將 firstNumber, secondNumber 做運算，return total

### Project style :

1. --primary-blue-color: #194FDD
2. --primary-gary-color: #A1A9B3
3. --primary-black-color: #051832
4. --secondary-blue-color: #206ACB
5. --secondary-gray-color: #C0CBDA
6. --point-red-color: #C22F26
7. --white-color: #FDFDFD
