---
pageTheme: blue
sidebarDepth: 2
---

# Regular Score List
<p><regular-score-list /> records for all scores that are in standard size, also known as <regular-scores />.</p>

[[toc]]

## Regular Score
<p><regular-scores /> is the biggest score group of all. It is also the only class that implements a code system for sorting and placement.</p>

![Regular Scores Header](/doc/assets/img/regular-score-list.png)  

### Reading the List
This topic will explain all information for <regular-scores />.

To illustrate, suppose we have this demo list:  
![Demo List](/doc/assets/img/list-illustration.png)  

This drawing explains how this demo list will look in the actual placement:  
![Illustration on Actual Placement](/doc/assets/img/full-illustration-v4.png)  

Summary:  
* You should now be able to mostly understand the meaning to each column and the score placement
* `Code` will be explained in the next section
* Note that `Box` is recorded for the first item in box only. Subsequent items before the next `Box` are associated with that box *(For box code, see [Box System](./structure#box-system))*
* Operators will learn more in later sections

### Code System
Each score is given a unique code based on their Score Names. The code consists of **3 main parts**.  

#### Part 1: Score Type
The Score Type can be explained below.

| Score Type | Scores |
| ---------- | ------ |
| .EN. | Full English Names |
| 01, 02, 03 ... | 1-Character Names, 2-Ch. Names, 3-Ch. Names ... |

::: tip Trivia
With recent updates to the System, the new Score Type now has an upper limit of 99.
:::

#### Part 2: Identifier
Scores are separated into **English (or 'Non-Chinese')** and **Chinese (or 'Chinese-mix')**. The identifier generates in a different way depending on the language type of a score.

| Language Type | Criteria on Score Name | Identifier Generated |
| ------------- | -------- | ------ |
| English | Only score names with **strictly no Chinese characters** | First Number or letter (1-digit/char) |
| Chinese | Score names **with one or more Chinese characters** | Strokes of the first Chinese character, and Total strokes of all Chinese characters (Capped at 99) |

::: tip Note
The language type of scores with names of mixed language usage will be determined based on the presence of any Chinese characters.
:::

#### Part 3: Access Code
The Sheet assigns an access code for each item to identify scores in case Part-1 and Part-2 are the same.

::: tip Note
The Access Code **can change** with the addition or removal of score items. The final order of Access Code is determined by input order and the sheet's sorting.
:::

#### Complete
The unique code is finally generated using the 3 parts above. For an operator, it is important to know how to read this code before getting further.  

> #### Format (English | Non-Chinese)  
> ![English Naming](/doc/assets/img/english-naming.png)  

> #### Format (Chinese | Chinese-Mix)  
> ![Chinese Naming](/doc/assets/img/chinese-naming.png)  

#### Other Columns
* `STATUS|MARKING` and `Remarks` are explained in [Structure](./structure#score-status)
* `Entry` Column is only for better editing. Readers can ignore this column. (Operators will learn more later)

### Score Input Sheet
The <regular-score-list /> cannot be edited directly. It takes input from <score-input-sheet />. Operators will learn to use the list later.  

![Score Input Sheet](/doc/assets/img/score-input-sheet.png)

### More Explanation on Regular Score List
The following topic is only for those who are interested in the inner-workings of the Sheets. It is a fun read, but you do not have to go through this part to understand the necessary operations.

**Enter topic: [Explaining Hidden Layers](./explaining-hidden-layers)**

### Related Pages
* [Take Score Out](./handling-existing-scores#standard-take-out) or [Put Score In](./handling-existing-scores#standard-put-in)
* Take or Put Content in a Score Folder or Check Scores: [Quick Actions](./handling-existing-scores#quick-actions)
* [Add a Score](./editing-sheet-data#add-score) or, in an unlikely scenario, [Remove Score](./editing-sheet-data#remove-score)
* [Add a Status](./general-management#add-remove-status) or [Retract a Status](./general-management#retract-status-or-remove-notes)