---
pageTheme: green
---

# 現存樂譜處理
知悉樂譜處理的標準程序，對操作員來說十分重要。

::: warning 通知
這部份是根據**本頁書寫時**的樂譜庫存辦法而寫的。當你閱讀的時候，資料有機會已過時。  
你可以 [聯絡 System Manager](./people-and-development#system-manager) 以**通知及獲得更新**。  
:::

::: warning 術語
本頁用之術語，請瀏覽 [術語頁](./outline#術語)。
:::

[[toc]]

## 標準提取
情況：你需要提取一份特定的項目。
1. 在 <regular-score-list /> 或 <special-score-list /> 上尋找該項目
    * 如果有需要，請閱讀 [怎樣尋找表格項目](./editing-sheet-data#google-sheets-技巧)
2. 將項目定位，找出其所在箱及位置
    * 如是<regular-scores />，尋找 `箱` 及 `位置`
    * 留意 `位置` 是「從箱前計起的**項目數**」，並非「從箱前計起的**文件夾數**」
    * 如是特別樂譜，直接取 **SP** 箱
3. 將文件夾取出
    * 實際位置應與 ScoreList 上指明的相同
    * 如非，請採取多一步—重整樂譜至與 ScoreList 一樣順序
    * 如果樂譜顯然失蹤，請 [追索樂譜及確認失蹤](./general-management#確認失蹤)
4. （可選）插入標示物件
    * 該標示物件（[圖](#標示物件如此)）應取代已取樂譜的原位，以便利放回過程
    * 標示物件可以是任意一個直放的空文件夾或紙張
5. 記錄暫有樂譜狀態
    * 如樂譜將離開 Storeroom 或該箱，**在印刷版上**（並非 Google Sheets 上），於 `狀態|存取登記` 標記圈 ◯
::: tip 提示
`狀態|存取登記` 中有任何**空**圈，意思為樂譜已取走。  
所有其他樂譜應現存於箱內，如非，應該在 `其他資料` 確認為 'Missing'。
:::

## 標準存放
情況：你有一份 ScoreList 上有記錄的項目（非新項目），需要存放。  

1. 在 <regular-score-list /> 或 <special-score-list /> 上尋找該項目
    * 如不能尋找項目，請 [加入樂譜](./editing-sheet-data#加譜)
2. 將項目定位，找出其所在箱及位置
    * 目標位置上可能已有標示物件
3. 將文件夾放入正確位置
    * 如是 <regular-scores />：
      * 檢查樂譜應存於標準文件夾內。如非，將譜放進一個新的標準文件夾內
      * 檢查文件夾數量應如 ScoreList 上寫的一樣。如非，更新 ScoreList 上該項的 `文件夾`
    * 如是 <technical-papers />，如正在加入類別，使用一個新的標準文件夾
    * 如 Storeroom 內的標準文件夾已用盡，請向音樂老師提出
    * 如一個文件夾已滿，請根據 [**文件夾項目更動規則**](#文件夾項目更動規則) 處理
    * 如一個箱已滿，請根據 [**箱內項目更動規則**](#箱內項目更動規則) 處理
4. 移除該位置的任何標示物件
5. 記錄暫有樂譜狀態
    * **在印刷版上**，如 `狀態|存取登記` 有空圈，於空圈內打 Tick ✓

> #### 標示物件如此
> ![標示物件](/doc/assets/img/indicator.png)

::: warning 對於樂譜處理的特別提示
<p><oversized-scores /> 內，大部份的譜紙<strong>沒有釘好</strong>。處理不當可導致庫存混亂。請留意以下措施：</p>

* 提取時，肯定已取走一份譜所有譜紙頁數
* 存放時，要肯定沒有放錯入另一份譜中間
:::

## 文件夾項目更動規則
**（「文件夾項目更動規則」 用於解決 [**標準存放**](#標準存放) 文件夾滿的問題）**  

如文件夾載滿：
* 取一個新的標準文件夾
* 將其放至該樂譜/類別現有文件夾之後
* 在 Google Sheets 上：
  * 如是 <regular-scores />，在 `文件夾` 更新文件夾數量
  * 如是 <technical-papers />，在 `其他資料` 更新文件夾數量

## 箱內項目更動規則
**（「箱內項目更動規則」用於解決 [**標準存放**](#標準存放) 箱滿的問題）**  

當一個項目需要存入箱內（下圖中的步 1）。有時候，該箱未必夠位置放置其項目，這時需要騰出位置，確保所有項目依次序存於箱內。這程序稱為「箱內項目更動」，會涉及 `本箱` 和部份或所有 `隨後的箱`。整個過程圖述如下：  

![箱內項目更動規則](/doc/assets/img/zh/box-illustration.png)  

簡單規則為：如一個箱不夠空間存放，將箱**最後面**多出的項目，移至下一個箱最前面；重覆**直至所有項目已順序存放**（步 2）。  

如 `最後箱` 亦不夠位，續（步 3）：  
* 開新箱
  * 向音樂老師索取一個新箱
  * 橫跨箱底貼上最少 3 條膠紙，橫跨箱內貼上最少3條膠紙，再在箱底兩側短邊封上膠紙，以穩固其新箱
  * 在**箱的前方、長邊**，使用**墨水筆**寫上新的箱號
  * 平分 `最後箱` 和 `新箱` 的項目，以確保樂譜不會倒塌（[圖](#良好做法)）

箱內項目更動以後，你必須（最後一步）：  
* 如是 <regular-scores />，在印刷版上用筆記記錄所有 `首項箱號` 的轉變（見下面例子）
* 在 Google Sheets 上，將同樣的轉變記錄至 ScoreList 內
  * 如 `首項箱號` 是舊有的，**移動舊有箱號**  或 **複製並移除舊有箱號**。不然，重覆箱號會導致更多錯誤

> #### 例子：記錄 `首項箱號` 轉變
> ![箱內項目更動筆記例子](/doc/assets/img/zh/box-change.png)  
> 留意，用筆記記錄之後，一定要在 Google Sheets 上進行同樣轉變  

#### 用你的方法整理樂譜
留意在箱內項目更動的過程中，樂譜順序不應有任何轉變，應與 ScoreList 相同。  
只要不影響順序，進行箱內項目更動時，其實可選擇不跟隨以上程序，跟據你自己的方法重新擺放箱/譜。  

#### 良好做法
處理任何箱之前，請留意以下各樣良好做法：  
* 請勿強行將項目塞進箱內。留空少許位置總比損毀紙箱為好
* 確保箱內樂譜不會塌下  
  ![不可倒塌規則](/doc/assets/img/zh/collapse-illustration.png)
* 可將項目平分至鄰近箱，以令每箱有足夠項目在內，不會塌下  
  ![重新分配示範](/doc/assets/img/zh/distribution-illustration.png)
* 可用填充物承托樂譜  
  ![填充物 1](/doc/assets/img/filler-1.png) ![填充物 2](/doc/assets/img/filler-2.png)

## 快速行動
有時你需要處理一個項目，但並不希望取走一個項目。你會取出一個項目，之後就放回箱內。之間可對項目進行處理，例子如下：
* 檢查一個文件夾
* <regular-scores />：改變樂譜文件夾的內容，例如 取/放一份聲部譜
* <technical-papers />：將一份資料放入一類別的文件夾（提示：大多數情況下，這是對於 <technical-papers /> 的唯一操作）

這些行動均為「快速行動」。要進行快速行動：
1. 在 <regular-score-list /> 或 <special-score-list /> 上尋找該項目
2. 將項目定位，找出其所在箱及位置
3. 將項目取出，再處理該項目
4. 離開之前，將項目放回箱內

::: tip 提示
加減內容時，文件夾有機會載滿，或因過厚而致不能放回所在位置。此時可根據 [文件夾項目更動規則](#文件夾項目更動規則) 或 [箱內項目更動規則](#箱內項目更動規則) 處理。
:::