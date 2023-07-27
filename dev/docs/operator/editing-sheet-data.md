---
pageTheme: blue
---

# Editing Sheet Data
This page will provide you a thorough understanding about how you can operate on the ScoreList.

::: warning Terminology
Refer to [Terminology](./outline#terminology) for specific terms used on this page.
:::

[[toc]]

## Skills Checkpoint
This section teaches you skill basics so that you can edit with ease.
#### The Entry Column
The rightmost `Entry` Column in <regular-score-list /> serves as a hyperlink back to the corresponding modifiable entry in <score-input-sheet />.  
![Entry Column](/doc/assets/img/entry-column.png)  
* The number displayed is the corresponding Row Number in <score-input-sheet />  
* Click on the cell, then follow the link (Mobile & PC)  

::: tip Trivia
`Entry` is one of the latest features that came around the time of this documentation was written.  
:::

#### Google Sheets Skills
Expand and read the topics you do not know about:
::: details Skill: Find an Item
* Open ScoreList on Google Sheets and go to the Sheet you want to search
* Use `Find and Replace` (Mobile) or Ctrl+F (PC)
* Use the Item Name as the Search Keyword
* Alternatively, you can look for the Item Name on the Hard-copy
:::

::: details Skill: Insert a Row
On PC:  
* Right-click the Row Number on the Left  
* Click `Insert 1 above` or `Insert 1 below`  

On Mobile:  
* Tap the Row Number on the Left  
* Tap one of the [Insert Buttons](#references)  
:::

::: details Skill: Delete Row vs Clear Row
Do not confuse Delete with Clear. **Clearing a Row** means erasing the content, leaving a blank row.  

This documentation only uses **Delete a Row**, which actually removes the row and does not leave a blank row.  

On PC:  
* Right-click the Row Number on the Left  
* Click `Delete Row`  

On Mobile:  
* Tap and Hold the Row Number on the Left  
* Tap `Delete`  
:::

#### References
::: details Mobile Phone Buttons
| Button | Position | Icon |
| ------ | -------- | ---- |
| More | Top-Right | ![More Button](/doc/assets/img/more-options.png) |
| Insert Below | Bottom-Right, when row is selected | ![Insert Below Button](/doc/assets/img/insert-below.png) |
| Insert Above | Bottom-Right, when row is selected | ![Insert Above Button](/doc/assets/img/insert-above.png) |
| Switch to Letter Keyboard | Top of the Text Bar on the Right Side, when editing a cell | ![Switch to Letter Button](/doc/assets/img/switch-letter.png) |
| Switch to Number Keypad | Top of the Text Bar on the Right Side, when editing a cell | ![Switch to Number Button](/doc/assets/img/switch-number.png) |
:::

## Add Score
Creating entries for new items is the most important aspect of the System. Here's how.  

Shortcuts (Double Click to Jump):
* [Add a Regular Score](#to-add-a-regular-score-go-to-score-input-sheet)
* [Add an Oversized Score](#to-add-an-oversized-score-go-to-special-score-list) 
* [Add a Technical Paper Category](#to-add-a-technical-paper-category-go-to-special-score-list)

::: tip Warning
**Warning** may flag during input, when the information is not complete. Make sure it is clear of warning when you finish input. Types of Errors will be explained in another section.
:::

::: tip Long Entries
For entries that exceeds the length of cell (esp. in `Version`):  
* Use Ctrl+Enter at suitable places to break lines so that no content exceeds length of cell (PC)  
* Mobile users please use a PC to do this  
:::

#### To Add a Regular Score, Go To Score Input Sheet
1. Insert a Row anywhere in the List
    * The convention is to add ONE row at the bottom of the list
    * Avoid adding multiple rows
    * If the Row Count is at 1000, DO NOT add extra rows. Instead, [contact System Manager for more rows](./people-and-development#system-manager)  

::: tip Trivia
<p><hidden-layer-one />, <hidden-layer-two /> and <regular-score-list /> each has 1000 rows in the current setting. If <score-input-sheet /> exceeds that count, the behaviour is uncertain. At some point during the development stage, Google Sheets generated more than 40,000 rows because of this error!</p>
:::

2. Input `Language`
    * Determine the Language Type:  

      | Language Type | Criteria on Score Name |
      | ------------- | -------- |
      | English | Only score names that are **entirely Non-Chinese** |
      | Chinese | All other score names **with any Chinese characters** including mixed language |
    * If English, `Language` is **`E`**
    * If Chinese, `Language` is **`C`**
3. Input Score Name in `Item`
    * For English, the name MUST start with a Number or English Character
    * For Chinese, replace all punctuations with Spaces; MUST use Traditional Chinese
      > Example: `陜北組曲(二):「萬水」千山縱橫！` >> `陜北組曲 二 萬水 千山縱橫`
4. [For Chinese Only] Input `Stroke`
    * Input number of strokes of the 1st Character in `First`
    * Input number of strokes of all **Chinese** characters in `Total` **(MUST NOT COUNT Non-Chinese Characters)**
    * Use Online Stroke Counters: [翻譯網筆劃查詢 by Tsung](https://name.longwin.com.tw/nos.php) (Recommended. Always use this when possible.) or [笔画数查询 by 秒查询](http://bihua.miaochaxun.com/) (Backup)
    * If one Stroke Counter does not give a valid result, use another one

::: details How to Use: 翻譯網筆劃查詢
![Usage of 翻譯網筆劃查詢](/doc/assets/img/stroke-tool-1.png)
:::

::: details How to Use: 笔画数查询
![Usage of 笔画数查询](/doc/assets/img/stroke-tool-2.png)
:::

5. Input Folder Count in `Folders`
6. Input Version Info in `Version`
    * For scores with **same names** only. If the Score Name is unique, `Version` can be empty
    * For scores with same names, each item is called a Version, no matter it is a different arrangement/movement or an entirely different music with coincidentally the same name
    * Each Version Info should be unique, with one or more identifiers, separated by Spaces, **to make sure scores can be distinguished apart from one another**:  

| Available Identifier | Description | Example |
| -------------------- | ----------- | ------- |
| 編制 | Any **name of arrangement** written on the Score Title | *編制 廣東音樂* |
| 編 | Arranger written on the Score | *編 汪熾華* |
| 曲 | Composer written on the Score | *曲 顧嘉輝* |
| Mov. | Movement | *Mov.4 Finale* |
| 調 | First Key Signature of the Score | *調 1=G* |
| 速 | First Tempo on the Score | *速 快板* |
| 拍 | First Time Signature on the Score | *拍 3/4* |
| 無資料/NA | No information on that score can be used to identify scores apart | *無資料* |

::: details Movements of some pieces are stored as separate versions, but some are not. How come?
It depends on how the scores are placed into folders.  
* Some long pieces cannot fit into a small number of folders. It makes sense to store those pieces separately by movements
* Shorter pieces may not need such separation

We do not normally call movements 'standalone versions'. But in the ScoreList System, 'Version' is a big umbrella term that has this broader definition.
:::

7. Put Score into Physical Storage
    * Go to Storeroom. Put the score into the physical storage using [Standard Put In](./handling-existing-scores#standard-put-in)
8. Update `First Item Box Code` **if the score is the first item in box**

::: tip Input Tips
![Input Tips](/doc/assets/img/cell-note.png)  
Certain cells in ScoreList have ◥ on the top-right corner. These cells contain input tips, which can remind you of the instructions above.  
You can click on the cell and press 'View Notes' (Mobile) or hover over the cell (PC) to read tips about input.  
:::

#### To Add an Oversized Score, Go To Special Score List
1. Insert a row to the 'Oversized Scores' list
    * You can insert in any order, but must be followed later during placement
2. Input Score Name in `Item`
3. Input Part Name ([Abbreviations](./structure#abbreviations)) in `Remarks`
4. Put Score into Physical Storage:
    * Go to Storeroom. Put Score into Physical Storage using [Standard Put In](./handling-existing-scores#standard-put-in)

#### To Add a Technical Paper Category, Go To Special Score List  
1. Insert a row to the 'Technical Papers' list
    * You can insert in any order, but must be followed later during placement
2. Input the New Category Name in `Category`
3. Input Folder Count in `Remarks` (Usually `x1`)
4. Put Score into Physical Storage:
    * Go to Storeroom. Put the New Category into the Physical Storage using [Standard Put In](./handling-existing-scores#standard-put-in)
5. Notify [System Manager](./people-and-development#system-manager) about the new Category and get an update to the [catagories table](./structure#catagories)

## Remove Score
::: danger Warning
Normally, you SHOULD NOT delete entries from ScoreList. You may want to [declare missing](./general-management#declare-missing).  
You should delete an Item **only if the Item is mistaken, duplicated, or you are instructed to do so**.  
:::

1. If the Item exists in Physical Storage, follow [Standard Take Out](./handling-existing-scores#standard-take-out) to take out **all folders or music sheets** of that Item
2. Find the Item Name on <regular-score-list /> or <special-score-list />
3. Delete the Item:
    * Selete and **DELETE** the Whole Row
4. If it is a Technical Paper Catagory:
    * Notify [System Manager](./people-and-development#system-manager) about the change and get an update to the [catagories table](./structure#catagories)

## Modify Score Info
Suppose you want to modify details about a Item:
1. Find the Item Name on <regular-score-list /> or <special-score-list />
    * For <regular-score-list />, use the Entry Column to go to corresponding Item in <score-input-sheet /> to modify
    * Modify directly on <special-score-list />
2. Make necessary change to that entry

## Errors
There are errors prefixed '*ILLEGAL*' in <regular-score-list /> that may trigger when incorrect input is detected.  
If there is any unresolved errors on the ScoreList, a **Warning Message** will appear on both <score-input-sheet /> and <regular-score-list />.  
Note that <special-score-list /> DOES NOT have error checking.  
> #### Warning Display
> ![Warning Message](/doc/assets/img/warning.png)  

#### To See Problems, Go To <regular-score-list />

Errors are shown on <regular-score-list />, and should be resolved by modifying <score-input-sheet />. [Find](#google-sheets-skills) and [Entry Column](#the-entry-column) can be useful in resolving errors.  

Types of Error:
| Error Name | Meaning |
| ---------- | -------- |
| *BAD BOX CODE* | Make sure the First Score has a `First Item Box Code`, and all `First Item Box Code` is [the correct type and is valid](./structure#box-system). |
| *BAD ENGLISH NAME* | Make sure that the English Score Name starts with a number/English character |
| *BAD OR MISSING STROKE COUNTS* | For Chinese Name, under `Stroke`, a Positive Integer is required in `First` and `Total` |
| *[`Box Code`] NOT A UNIQUE BOX CODE* | The `Box Code` is found more than once. Make sure that only the First Item in Box is assigned a `First Item Box Code` |
| *REQUIRES VERSION* | Score Name is not unique and Version Info is required in `Version` for distinguishing scores of same name |
| *STROKE COUNT MISMATCH* | ([See Below](#error-message-stroke-count-mismatch)) |
| *UNKNOWN LANGUAGE* | Make sure `Language` is **`E`** or **`C`** |

#### Error Message: *STROKE COUNT MISMATCH*
For the first appearance of a name, the Sheet presumes that its Stroke Count is correct.  
As the Stroke Count must be the same for Same Names, it fires error for all **subsequent score with Same Names** that have different Stroke Counts.  
You should note that the first appearance, although will not flag an error, can be the wrong one.  
All Stroke Counts of the Same Name **must be the same**. If you encounter the *STROKE COUNT MISMATCH* error, check Stroke Counts again.  
Error may arise from conflicting results from Online Stroke Counters. In that case, the results from [翻譯網筆劃查詢](https://name.longwin.com.tw/nos.php) will be final.  

::: tip Trivia
`Folders` used to have error checking as well. But we later decided to default it as `1` without flagging an error.
:::