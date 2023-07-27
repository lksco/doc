---
pageTheme: green
---

# 表格資料編輯
這頁提供對於 ScoreList 操作的完整說明。

::: warning 術語
本頁用之術語，請瀏覽 [術語頁](./outline#術語)。
:::

[[toc]]

## 技巧檢查站
本部份為簡單的基本技巧教學，讓你更順暢地編輯 ScoreList。
#### 「條目」欄
<regular-score-list /> 最右邊的 `條目` 欄 用於連結 <score-input-sheet /> 相應的條目。  
![「條目」欄](/doc/assets/img/entry-column.png)  
* 顯示的數字為 <score-input-sheet /> 內相應的行數  
* 點擊該儲存格，然後跟隨連結（手機及個人電腦）  

::: tip 小知識
`條目` 是一個較新的功能，大約於此說明書寫時才出現。  
:::

#### Google Sheets 技巧
如果你需要知道下列任何技巧，請展開以閱讀有關說明：
::: details 技巧：尋找項目
* 在 Google Sheets 上開啟 ScoreList，前往需搜尋的工作表
* 使用 `尋找與取代` （手機） 或 Ctrl+F（個人電腦）
* 使用項目名作搜尋字眼
* 另外，你亦可在印刷版上尋找項目名
:::

::: details 技巧：插入項目
個人電腦上：  
* 右鍵點擊左邊的行數  
* 選擇 `向上插入1列` 或 `向下插入1列`  

手機上：  
* 點擊左邊的行數  
* 點擊其中一個 [插入圖示](#參考)  
:::

::: details 技巧：刪除列 vs 清除列
不要混淆刪除及清除。**清除列**清除整列的內容，留下空行。  

本說明只使用**刪除列**，即刪除整列並不留空行。  

個人電腦上：  
* 右鍵點擊左邊的行數  
* 選擇 `刪除列`  

手機上：  
* 點擊並按住左邊的行數  
* 點擊 `刪除`  
:::

#### 參考
::: details 手機圖示
| 意思 | 位置 | 圖示 |
| ------ | -------- | ---- |
| 更多 | 顯示於右上 | ![更多 圖示](/doc/assets/img/more-options.png) |
| 向下插入 | 點選整列時，顯示於右下 | ![向下插入 圖示](/doc/assets/img/insert-below.png) |
| 向上插入 | 點選整列時，顯示於右下 | ![向上插入 圖示](/doc/assets/img/insert-above.png) |
| 轉換至英文鍵盤 | 編輯一格時，顯示於右邊、輸入框之上 | ![英文鍵盤 圖示](/doc/assets/img/switch-letter.png) |
| 轉換至數字鍵盤 | 編輯一格時，顯示於右邊、輸入框之上 | ![數字鍵盤 圖示](/doc/assets/img/switch-number.png) |
:::

## 加譜
全系統最為重要的操作是增加項目，以擴展館藏譜目。詳情如下。  

傳送（雙擊傳送）：
* [加入常規樂譜](#要加入常規樂譜-前往存譜輸入清單)
* [加入特大樂譜](#要加入大型樂譜-前往特別存譜總表) 
* [加入技術文件類別](#要加入技術文件類型-前往特別存譜總表)

::: tip 警告
輸入時，當資料還未輸入齊全，可能會觸發**警告**。請確保完成輸入時再沒有任何警告。各項警告介紹於另一部份。
:::

::: tip 較長輸入
有時輸入的資料比儲存格還長（尤其在 `版本資料` 內）。在這情況：  
* 用 Ctrl+Enter 在適當位置斷開句子至下一行，以確保沒內容超越儲存格長度（個人電腦） 
* 手機使用者，請使用電腦來斷行  
:::

#### 要加入常規樂譜，前往存譜輸入清單
1. 在表格任何處插入列
    * 慣例是在表格最低加入一行
    * 避免加入多於一行
    * 如行數多於 1000，切勿再加行。在這情況, [聯絡 System Manager 要求更多行數](./people-and-development#system-manager)  

::: tip 小知識
<p>在現時的設定下，<hidden-layer-one />、<hidden-layer-two /> 及 <regular-score-list /> 分別備有 1000 行。如 <score-input-sheet /> 超越此行數，我們不能確定其他工作表的輸出結果。在發展階段途中，我們曾因此產生超過 40,000 個空行！</p>
:::

2. 輸入 `語言`
    * 確定樂譜的 語言類別：  

      | 語言類別 | 類別準則 |
      | ------------- | -------- |
      | 英文 | **全為非中文字符**的譜名 |
      | 中文 | 所有其他**含有任何中文字符**的譜名，包括混合語言譜名 |
    * 如為英文，`語言` 是 **`E`**
    * 如為中文，`語言` 是 **`C`**
3. 於 `曲名` 輸入譜名
    * 如為英文，譜名開首字符必須為數字或英文字
    * 如為中文，用空白取代所有其他標點符號；必須用正體中文
      > 例子: `陜北組曲（二）:「萬水」千山縱橫！` >> `陜北組曲 二 萬水 千山縱橫`
4. [限中文譜名] 輸入 `筆劃`
    * 在 `首字` 內，輸入首個中文字的筆劃數
    * 在 `總數` 內，輸入所有**中文**字的筆劃總數 **（切勿計算非中文字符）**
    * 可使用網上筆劃計算工具：[翻譯網筆劃查詢 by Tsung](https://name.longwin.com.tw/nos.php)（建議，已此為準）或 [笔画数查询 by 秒查询](http://bihua.miaochaxun.com/)（後備）
    * 如其中一個筆劃計算工具無法輸出正常結果，請使用上面提供的另一個網

::: details 用法教學：翻譯網筆劃查詢
![翻譯網筆劃查詢 用法](/doc/assets/img/zh/stroke-tool-1.png)
:::

::: details 用法教學：笔画数查询
![笔画数查询 用法](/doc/assets/img/zh/stroke-tool-2.png)
:::

5. 輸入文件夾數量至 `文件夾`
6. 輸入版本資料至 `版本資料`
    * 只需為**同名**的樂譜輸入版本。沒有重覆的譜名，`版本資料` 可留空
    * 同名的樂譜當中，每項目為一版本，無論是不同編曲、不同樂章 或是 完全不同但恰巧同名的樂曲
    * 版本資料應是不重覆的，可包含一個或多個識別資料（如有多個識別資料，應用空白分開），**以足夠用於從其他同名樂譜中區分出來**：  

| 可用的識別資料 | 描述 | 例子 |
| -------------------- | ----------- | ------- |
| 編制 | 譜標題寫的任何**編制名** | *編制 廣東音樂* |
| 編 | 譜上寫明之編曲人 | *編 汪熾華* |
| 曲 | 譜上寫明之作曲家 | *曲 顧嘉輝* |
| Mov. | 樂章 | *Mov.4 Finale* |
| 調 | 樂譜首個調號 | *調 1=G* |
| 速 | 樂譜首個速度記號 | *速 快板* |
| 拍 | 樂譜首個節拍記號 | *拍 3/4* |
| 無資料/NA | 樂譜上沒有任何可用於識別的資料 | *無資料* |

::: details 為何有些樂譜的多個樂章有分作「不同版本」，有些又沒分版本？
這取決於樂譜放置於文件夾的方法。  
* 有些較長的樂曲不能載於少量文件夾內。因此，這些樂譜可能會分樂章存放
* 較短的樂曲則多不需以樂章分版本存放

不要與音樂用字混淆。正常，我們不會叫樂章為「一個獨立版本」。ScoreList 系統中的「版本」一字是一個指義較廣的總稱。
:::

7. 將樂譜放入實際庫存內
    * 前往 Storeroom。使用 [標準存放](./handling-existing-scores#標準存放) 將譜放入樂譜庫存
8. **如樂譜為該箱內的首項**，更新 `首項箱號` 資料

::: tip 輸入提示
![輸入提示](/doc/assets/img/cell-note.png)  
ScoreList 上，有些儲存格的右上有這個符號 ◥，代表該格有輸入提示。在提示內，你可以找到相關輸入指引的簡單描述，以便記憶。  
輸入時，可以點擊這些儲存格 再按「檢視筆記」（手機） 或 移鼠標至儲存格上（個人電腦），即能檢視輸入提示。  
:::

#### 要加入大型樂譜，前往特別存譜總表  
1. 在「大型樂譜類別」表格內，插入一列
    * 可在任意位置插入，但必須與擺放次序相同
2. 於 `曲名` 輸入譜名
3. 於 `其他資料` 輸入樂器聲部（[簡稱參考](./structure#簡稱)）
4. 將樂譜放入實際庫存內
    * 前往 Storeroom。使用 [標準存放](./handling-existing-scores#標準存放) 將譜放入樂譜庫存

#### 要加入技術文件類型，前往特別存譜總表
1. 在「技術文件類別」表格內，插入列
    * 可在任意位置插入，但必須與擺放次序相同
2. 於 `類別` 輸入新類別名
3. 於 `其他資料` 輸入文件夾數量（通常為 `x1`）
4. 將樂譜放入實際庫存內
    * 前往 Storeroom。使用 [標準存放](./handling-existing-scores#標準存放) 將新類別放入樂譜庫存
5. 通知 [System Manager](./people-and-development#system-manager) 已加入類別，以方便更新 [類別列表](./structure#類別)

## 移除
::: danger 警告
正常情況下，請勿在 ScoreList 上移除任何條目。如項目失蹤，請[確認失蹤](./general-management#確認失蹤)。  
**除非項目輸入有誤、有不正確的重覆項目 或 有老師指示**，否則切勿移除項目。  
:::

1. 如該項目現存於實際庫存，依照 [標準提取](./handling-existing-scores#標準提取) 取走該項目的**所有文件夾或譜紙**
2. 在 <regular-score-list /> 或 <special-score-list /> 上尋找譜名
3. 移除項目：
    * 選擇並**刪除**整列
4. 如移除的是特別文件類別：
    * 通知 [System Manager](./people-and-development#system-manager) 已作出的變化，以方便更新 [類別列表](./structure#類別)

## 更改資料
情況：你需要更改項目的資料。
1. 在 <regular-score-list /> 或 <special-score-list /> 上尋找譜名
    * 如是 <regular-score-list />，使用條目欄前往 <score-input-sheet /> 中相應的條目以進行更改
    * 如是 <special-score-list />，直接在表上更改
2. 對項目資料進行所需變更

## 錯誤信息
在 <regular-score-list /> 上，如有由 '*ILLEGAL*' 為首的錯誤信息，代表輸入上有機會出錯。  
如有任何未解除的錯誤，<score-input-sheet /> 及 <regular-score-list /> 的頁頂會出現**警告顯示信息**。  
留意 <special-score-list /> 並沒有類似的錯誤檢查。  
> #### 警告提示
> ![警告顯示信息](/doc/assets/img/warning.png)  

#### 要查看問題，前往 <regular-score-list />

錯誤信息會顯示於 <regular-score-list />，而你需要在 <score-input-sheet /> 中更改輸入以解除錯誤。你可以利用 [尋找](#google-sheets-技巧)、[條目欄](#「條目」欄) 等工具解決輸入中的問題。  

下列各種錯誤：
| 錯誤名稱 | 譯文 | 解釋 |
| ---------- | - | -------- |
| *BAD BOX CODE* | 箱號有誤 | 確保表格的第一份譜有 `首項箱號`，而所有 `首項箱號` 的 [類別及格式](./structure#分箱機制) 都為正確。 |
| *BAD ENGLISH NAME* | 英文譜名有誤 | 確保英文譜名的首字符是數字/英文字 |
| *BAD OR MISSING STROKE COUNTS* | 未有／錯誤筆劃數 | 中文譜名中的 `筆劃` 中，`首字` 及 `總數` 必須為正數 |
| *[`Box Code`] NOT A UNIQUE BOX CODE* | 出現重覆 [`箱號`] | 該 `箱號` 在表格中出現多於一次。確保只在箱內首個項目中有輸入 `首項箱號` |
| *REQUIRES VERSION* | 需標明版本 | 譜名有重覆，必須輸入 `版本資料` 區別同名樂譜 |
| *STROKE COUNT MISMATCH* | 筆劃數分歧 |（[詳見下面](#錯誤信息-stroke-count-mismatch-筆劃數分歧)）|
| *UNKNOWN LANGUAGE* | 不明語言 | 確保 `語言` 只能是 **`E`** 或 **`C`** |

#### 錯誤信息：*STROKE COUNT MISMATCH*（筆劃數分歧）
表格檢查筆劃數時，會假定每一個名首出現時，輸入的筆劃數為正確。  
由於同名樂譜應有同一筆劃，然後當任何**隨後出現的同名樂譜**有不同的筆劃數，將會觸發錯誤。  
需要留意，雖然首出現的筆劃數不會顯示為錯誤，其筆劃數亦有可能不正確。  
同名樂譜的筆劃數**必須一樣**。如遇上 *STROKE COUNT MISMATCH* 錯誤，請重新計算其筆劃數。  
另外，不同筆劃網站計算之間，亦可能出現矛盾，因而令同名樂譜出現不同筆劃數。如有矛盾，均以 [翻譯網筆劃查詢](https://name.longwin.com.tw/nos.php) 作準。  

::: tip 小知識
`文件夾` 曾經亦有檢查錯誤輸入的機制，但已於後期移除，並用 `1` 取代所有非有效的輸入。
:::