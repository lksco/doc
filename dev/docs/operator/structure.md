---
pageTheme: blue
---

# Structure
The **Overview** Part of this document is the reading guide of ScoreList. If you only intend to learn about the ScoreList, these pages are enough for you. If you should learn to operate on the ScoreList, knowledge from this part will be necessary for reading **Operations**.

[[toc]]

## Google Sheets Document Structure
```
Home
├── Regular Score List
│   ├── Score Input Sheet
│   ├── Hidden Layer (I) [HL(I)]
│   └── Hidden Layer (II) [HL(II)]
└── Special Score List
```
Note: Names in square brackets (`[]`) are actual namings shown on ScoreList.

There are two main lists that hold all the score information, <regular-score-list /> and <special-score-list />.

<p><score-input-sheet /> can be edited to change data on <regular-score-list />. The hidden layers are entirely for data processing and are not likely to be viewed or modified.</p>

<p><special-score-list /> can be edited directly.</p>

## Score Groups

| Group Classification | Sheet | Detail |
| -------------------- | ----- | ------ |
| <regular-scores /> | <regular-score-list /> | Consists of most scores. The only class that implements a code system for sorting and placement. |
| <oversized-scores /> | <special-score-list /> | Scores that do not fit normally in regular transparent folders. The only class not stored in Standard Folders. |
| <technical-papers /> | <special-score-list /> | An archive of materials or unnamed/unidentified scores. Stored with Categories. |

Scores are classified into 3 groups in the ScoreList system.

Only <regular-scores /> are recorded on <regular-score-list />, while <technical-papers /> and <oversized-scores /> are recorded on <special-score-list />, with <technical-papers /> first.

## Box System

| Box Type | Sheet | Scores Stored |
|:--------:|:----------:| ------ |
| T1 | <regular-score-list /> | <regular-scores /> of type .EN. and 01* |
| T2 to T7 | <regular-score-list /> | <regular-scores /> of type 02, 03, 04, 05, 06, 07* |
| T8+ | <regular-score-list /> | <regular-scores /> of type 08 or Above* |
| SP | <special-score-list /> | <technical-papers /> and <oversized-scores /> |
*(\*<regular-scores /> have 'score types'. This will be explained later in [Code System](./regular-score-list#code-system).)*

Boxes are classified into different box types. Each box is assigned with one specific box type, marked on the box. Multiple boxes can be added to one box type: #1 is the First Box, #2 is the Second, and so on.

> #### Format
> ![Box Code Naming](/doc/assets/img/box-naming.png)  
> (3rd Box of Type T5)  

Within one type, scores are stored in the exact order as in <regular-score-list /> or <special-score-list />, starting from *top to bottom* of Box #1, then from *top to bottom* of Box #2, etc.

> #### Correct Score Placement in a Box
> ![An Actual Box](/doc/assets/img/box-photo.png)  
> With items for this box, the topmost on the ScoreList goes in the front of the box, all the way to the bottommost item at the back.

## Score Status

| Status Type | Column | Detail |
| ----------- | ------ | ------ |
| Volatile Score Status | `STATUS|MARKING` | A status that is volatile (more temporary). |
| Lasting Score Status | `Remarks` | A status that is lasting (more permanent). |
| *General Note-taking* | `STATUS|MARKING` | Any notes can be marked on `STATUS|MARKING`. |

Score Status is divided into two types. Volatile Score Status like 'Borrowed' Status are marked and tracked **on paper**. Lasting Score Status like 'Missing' Status are marked and tracked **on Google Sheets, not on paper**.

<p><regular-score-list /> and <special-score-list /> have the corresponding columns for both types of score status.</p>

::: tip
The `STATUS|MARKING` is for handwritten notes on Hard-copy only. There is no way of editing it on Google Sheet.  
In the Storeroom, it is convenient to note down things on Hard-copy that you need to remember for later, like things to change on the Sheet.
:::

## Related Pages
* [Folder Change](./handling-existing-scores#folder-change)
* [Box Change](./handling-existing-scores#box-change)