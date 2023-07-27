---
pageTheme: green
---

# 系統結構
本說明文件之「介紹」部份為 ScoreList 的基本瀏覽指南。這幾頁資料已足夠用於了解 ScoreList 使用方法。如果你要熟悉 ScoreList 詳細操作／編輯方法，則需加閱讀「操作」部份。

[[toc]]

## Google Sheets 文件結構
```
Home
├── 常規存譜總表 [Regular Score List]
│   ├── 存譜輸入清單 [Score Input Sheet]
│   ├── 中介計算版面（I）[HL(I)]
│   └── 中介計算版面（II）[HL(II)]
└── 特別存譜總表 [Special Score List]
```
注：方括 (`[]`) 內為 ScoreList 上的實際命名。

ScoreList 上的主要表格為 <regular-score-list /> 和 <special-score-list />。這兩個表格寫有所有樂譜資料。

<p><regular-score-list /> 不能用於直接編輯，其資料可於 <score-input-sheet /> 內輸入、變更。中介計算版面只用於數據處理，一般情況下均不會用於瀏覽，亦不會作變動。</p>

<p><special-score-list /> 可直接編輯。</p>

## 樂譜分類

| 分類 | 存於表格 | 意思 |
| -------------------- | ----- | ------ |
| <regular-scores /> | <regular-score-list /> | 大部份樂譜均歸此類。此亦為唯一使用編號作儲存及排序的分類。 |
| <oversized-scores /> | <special-score-list /> | 不能放入樂譜正規透明文件夾的樂譜。此亦為唯一非使用常規文件夾的分類。 |
| <technical-papers /> | <special-score-list /> | 資料存檔，以及無名／未能辨認之樂譜。依「類別」存放。 |

於 ScoreList 系統內，樂譜歸入三大「分類」。

<p><regular-score-list /> 只用於記錄 <regular-scores />，而 <special-score-list /> 則用於記錄 <technical-papers /> 及 <oversized-scores />（<technical-papers /> 在上）。</p>

## 分箱機制

| 箱類 | 所屬表格 | 存放之樂譜 |
|:--------:|:----------:| ------ |
| T1 | <regular-score-list /> | <regular-scores />：譜類 .EN. 及 01* |
| T2 to T7 | <regular-score-list /> | <regular-scores />：譜類 02、03、04、05、06、07* |
| T8+ | <regular-score-list /> | <regular-scores />：譜類 08 或以上* |
| SP | <special-score-list /> | <technical-papers /> 及 <oversized-scores /> |
*(\*<regular-scores /> 之「譜類」介紹於 [樂譜編號機制](./regular-score-list#樂譜編號機制) 章節。)*

每個箱均屬一個箱類，而每個箱上應有標示箱類。一個箱類中，第一個箱登為 #1，第二個 #2，如此類推。

> #### 格式
> ![箱號例子](/doc/assets/img/zh/box-naming.png)  
> （箱類 T5 中的第三個箱）  

一個箱類中，樂譜嚴格根據 <regular-score-list /> 或 <special-score-list /> 的順序擺放，由箱 #1 *頂至底*，然後由箱 #2 *頂至底*，如此類推。

> #### 正確存譜方法
> ![真箱圖](/doc/assets/img/zh/box-photo.png)  
> 表格中屬一個箱的項目中，頂項應置於箱的前端，每份譜應依次序擺放，直至該箱的尾項置箱的最後面。

## 樂譜狀態

| 狀態類別 | 使用欄目 | 說明 |
| ----------- | ------ | ------ |
| 暫有樂譜狀態 | `狀態|存取登記` | 預計較短暫的狀態記錄。 |
| 久有樂譜狀態 | `其他資料` | 預計較長期的狀態記錄。 |
| *其他筆記* | `狀態|存取登記` | 任何其他筆記可記錄於 `狀態|存取登記`。 |

樂譜狀態分兩類：「暫有樂譜狀態」如「Borrowed」（外借中）應寫在 **印刷版紙上**。「久有樂譜狀態」如「Missing」（失蹤）應記錄於 **Google Sheets 內，而非紙上**。

<p><regular-score-list /> 和 <special-score-list /> 均有相應欄目，供填寫上述兩類樂譜狀態。</p>

::: tip
`狀態|存取登記` 只應使用於手寫筆記，該欄在 Google Sheets 內不應有任何資料。  
一般情況下，在 Storeroom 內進行操作時，先以紙筆於印刷版上作記下將進行之操作，之後再在 Google Sheets 進行相關更改，會較為方便。
:::

## 相關連結
* [文件夾項目更動](./handling-existing-scores#文件夾項目更動規則)
* [箱內項目更動](./handling-existing-scores#箱內項目更動規則)