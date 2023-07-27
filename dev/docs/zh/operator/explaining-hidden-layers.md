---
pageTheme：green
---

← [回到上頁](./regular-score-list#more-explanation-on-regular-score-list)

## 中介計算頁面詳解  
此頁用於解釋中介計算頁面的詳細運算方法。此為選擇性閱讀內容，其他頁面已涵蓋供 ScoreList 瀏覽者及操作者的所需資訊。

[[toc]]

### 概述
從輸入到輸出，一共有四張表格。表格能夠自動管理排序及數據處理。

> <score-input-sheet /> → <hidden-layer-one /> → <hidden-layer-two /> → <regular-score-list />

由於數據處理較為複雜，ScoreList 使用了兩個「中介計算」表格，在輸出前整理資訊，即各樣數據排序、計算，及錯誤偵查；樂譜資訊方能從 <score-input-sheet /> 正確投影至 <regular-score-list />。

由於「中介計算」表格只用於傳輸上一表格的數據至下一表格，一般情況下，操作員並不會接觸或使用其內容。

數據處理的三大部份（自動排序、數據處理、錯誤偵查）詳細解釋如下。

### 自動排序
處理過程中，每層的部份資料會經排序，傳輸至下一層。整個排序過程如下：  

![排序圖示](/doc/assets/img/zh/sort-illustration.png)  

* **首輪排序**：從 <score-input-sheet /> 往 <hidden-layer-one />
  1. 依 `語言` 排序：將英文類別放於中文類別之前。
  2. 依 `筆劃` 排序：先以首字筆劃，後以筆劃總數排序。如筆劃數過 99，將當作 99 處理。
  3. 依 `曲名` 排序：歸納相同曲名的樂譜。
  * `文件夾`：預設為 1
* **二次排序**：從 <hidden-layer-one /> 往 <hidden-layer-two />
  1. 依 `登記號碼1&2部份` 排序：此段號碼將決定最終排序。
  * 所有偵測出的錯誤項目將置頂
* **三次排序**：從 <hidden-layer-two /> 往 <regular-score-list />
  1. 最後，依 `登記號碼接合3部份` 排序。
  * 所有偵測出的錯誤項目將置頂

### 數據處理
**「中介計算」表格**之運作解釋如下：

#### 存譜輸入清單
![存譜輸入清單](/doc/assets/img/score-input-sheet.png)  

1. 輸入清單欄目
    * 此介面供輸入所有所需樂譜資訊
    * 個別用途於 [表格資料編輯](./editing-sheet-data.md) 再作詳細解釋

#### 中介計算版面（I）
![中介計算版面（I）](/doc/assets/img/hidden-layer-one.png)

2. `字數/字元` 欄目  
    * 如樂譜屬英文類別，將設為 `項目` 首字元
    * 如樂譜屬中文類別，將設為 `項目` 總字元數

3. `登記號碼1&2部份` 欄目  
    * 如樂譜屬英文類別，譜類將為 `.EN.`，而識別碼將等同 `字數/字元`
    * 如樂譜屬中文類別，譜類將等同 `字數/字元`，而識別碼將從 `筆劃` 的兩欄（`首字`、`總數`）合併而成  

#### 中介計算版面（II）
![中介計算版面（II）](/doc/assets/img/hidden-layer-two.png)

4. `獨立箱號` 為 `位置` 的輔助欄目。此欄根據 `首項箱號` 抄寫箱號至所有項目。  
    > 例如，所有位於 `首項箱號` T1#1 或以下，且位於下一 `首項箱號` 以上的樂譜，將配有獨立箱號 T1#1。  

5. `位置` 欄目會使用 `獨立箱號` 估計箱內擺放位置。此欄亦負責偵測錯誤。（錯誤尋找方法恕不詳述，如有興趣，請自行閱讀表格運算。）  

6. 每份樂譜均分配一個 `序號`。序號預設為 1；每遇上相同之 `登記號碼1&2部份`，分配的序號則需加一。  

7. `登記號碼接合3部份` 用於接合 `登記號碼1&2部份` 及 `序號`，亦是 <regular-score-list /> 顯示的最終號碼。

8. `筆劃錯配檢查` 為 `登記號碼接合3部份` 的輔助欄目，用於偵查錯誤。（錯誤尋找方法恕不詳述，如有興趣，請自行閱讀表格運算。）  

#### 常規存譜總表
![常規存譜總表](/doc/assets/img/regular-score-list.png)

9. 所需輸出資料將抄至 <regular-score-list />： 
    * `登記號碼接合3部份` 在此表格縮寫為 `登記號碼`
    * `首項箱號` 在此表格縮寫為 `箱`
      （留意，此表格的 `箱` 與 <hidden-layer-two /> 的 `獨立箱號` 欄目無關）
10. 輸出表格欄目
    * 此介面輸出所有已排序及整理的樂譜資訊
    * 個別用途於 [常規存譜總表](./regular-score-list.md) 再作詳細解釋

#### 其他
* 在多個表格出現的 `條目` 欄，用於將 <regular-score-list /> 上的每項樂譜創建連結，以便返回 <score-input-sheet /> 上的輸入項目。
* 排序及整理前，會篩走沒有 `曲名` 的項目，確保不會對空行進行整理；過程使用 IF 及 FILTER 算式篩查。

### 錯誤偵查
資料處理過程中，會同時檢查部份數值，圖解如下：

![錯誤偵查圖示](/doc/assets/img/zh/error-illustration.png)

以上圖示之「含檢查系統」欄目會同時檢查「受檢查格」之數值。如某格查出錯誤，將會沿線傳至各個「含錯誤接收系統」欄目，直至顯示於 <regular-score-list />。

下表為負責各項錯誤偵查的儲存格。如有興趣，請自行翻查表格位置查閱運算。
| 錯誤名稱 | 位於表格 | 位於儲存格 |
| ---------- | -------- | ------- |
| *BAD BOX CODE* | <hidden-layer-two /> | B4 |
| *BAD ENGLISH NAME* | <hidden-layer-one /> | A4 |
| *BAD OR MISSING STROKE COUNTS* | <hidden-layer-one /> | A4 |
| *NOT A UNIQUE BOX CODE* | <hidden-layer-one /> | A4 |
| *REQUIRES VERSION* | <hidden-layer-two /> | C4 |
| *STROKE COUNT MISMATCH* | <hidden-layer-two /> | C4 |
| *UNKNOWN LANGUAGE* | <hidden-layer-one /> | B4 |

如要查看錯誤項目析義，請前往 [表格資料編輯 § 錯誤信息](./editing-sheet-data#錯誤信息)。

### 更多資訊
如有興趣更深入了解表格運作方式，建議自行前往表格查看其內裏運算。

← [回到上頁](./regular-score-list#more-explanation-on-regular-score-list)