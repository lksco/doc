---
pageTheme: blue
---

← [Go Back](./regular-score-list#more-explanation-on-regular-score-list)

## Explaining Hidden Layers  
This page explains the technical details of Hidden Layers. This page is entirely optional as all the necessary information for Readers and Operators are already covered in other pages.

[[toc]]

### Overview
There are four sheets governing cell data from input page down to the displayed page. Sorting and data processing is automated.

> <score-input-sheet /> → <hidden-layer-one /> → <hidden-layer-two /> → <regular-score-list />

Because of its technical difficulty, the data processing is split into multiple parts, with 2 'Hidden Layers' before the output. Each part consists of sorting, evaluation and error checking. Data from <score-input-sheet /> can be properly processed all the way down to <regular-score-list />.

Generally, as the sole purpose of 'Hidden Layers' is to pass data from their previous layers to the next, they are never used by an Operator.

In the following sections, the three main parts of the data handling (Sorting, Data Processing, Error Checking) will be explained in detail.

### Sorting
Selected data from each layer are chosen and ported to the next layer with sorting. The whole sorting process is as follows:  

![Sorting Phase Illustration](/doc/assets/img/sort-illustration.png)  

* **First Sort** from <score-input-sheet /> to <hidden-layer-one />
  1. Sort by `Language`: Put English Scores before Chinese Scores.
  2. Sort by `Stroke`: Sort in accending order according to first and total stroke. Porting stroke counts over 99 as 99.
  3. Sort by `Item`: Put items with the same name together.
  * `Folder`: Default is 1
* **Second Sort** from <hidden-layer-one /> to <hidden-layer-two />
  1. Sort by `CODE Part 1&2`: This code already determine the final order.
  * All new-found illegal items are brought on top
* **Third Sort** from <hidden-layer-two /> to <regular-score-list />
  1. Final sort by `CODE with Part3`.
  * All new-found illegal items are brought on top

### Data Processing
Below explains the functionalities of the columns **inside Hidden Layers**.

#### On Score Input Sheet
![Score Input Sheet](/doc/assets/img/score-input-sheet.png)  

1. Input Page Columns
    * This interface allows the input of all the necessary information
    * These columns will be explained in [Editing Sheet Data](./editing-sheet-data.md)

#### On Hidden Layer I
![Hidden Layer I](/doc/assets/img/hidden-layer-one.png)

2. `Character or Letter` Column  
    * For English scores, it takes first character from `Item`
    * For Chinese scores, it takes total number of characters from `Item`

3. `CODE Part 1&2` Column  
    * For English scores, it takes score type `.EN.` and identifier from `Character or Letter`
    * For Chinese scores, it takes score type from `Character or Letter` and identifier from in `Strokes`, combining `First` and `Total`  

#### On Hidden Layer II
![Hidden Layer II](/doc/assets/img/hidden-layer-two.png)

4. `Individual Box Code` is a helper column of `Place`. It copies `First Item Box Code` to each item.  
    > For example, all the items at or below First Item Box Code of T1#1 and above the next First Item Box Code will have a Individual Box Code of T1#1.  

5. `Place` will then use `Individual Box Code` to estimate the order of placement inside a box. Also, it performs an error check. (Error checking methods will not be explained. Please read the formulas if you are interested.)  

6. `Access` (Access Code) is assigned for each item. It starts from 1; if the same `CODE Part1&2` is encountered again, the access code should be increased by 1.  

7. `CODE with Part3` combines `CODE Part1&2` and `Access Code`, and it is the final code on <regular-score-list />.

8. `Stroke Count Mismatch Check` is a helper column of `CODE with Part3` for error checking. (Error checking methods will not be explained. Please read the formulas if you are interested.)  

#### On Regular Score List
![Regular Score List](/doc/assets/img/regular-score-list.png)

9. When necessary information is copied onto <regular-score-list />:  
    * The column name `CODE with Part3` is abbreviated to `CODE`
    * The column name `First Item Box Code` is abbreviated to `Box`
      (Note that `Box` is unrelated to `Individual Box Code` in <hidden-layer-two />)
10. Output Page Columns
    * This interface spits out the useful information in sorted and processed form
    * These columns are explained in [Regular Score List](./regular-score-list.md)

#### Other Notes
* The `Entry` column exists in various layers. It links each item on <regular-score-list /> to its input row on <score-input-sheet /> for easier navigation.
* All the sorting and column formulas are evaluated only if `Item` is present. This is done by IF and FILTER checks.

### Error Catching
During data processing, some values are checked to detect possible errors. The following illustrates the process:

![Error Catching Illustration](/doc/assets/img/error-illustration.png)

In the illustration above, 'Error Checkers' check for errors on one or more 'Checked Columns'. When an error is caught, it will follow the route indicated by yellow arrows to each 'Error Receivers', until it displays on <regular-score-list />.

Here is a reference to where errors are checked. You can look for the corresponding cells if you intend to read their formulas.
| Error Name | On Sheet | On Cell |
| ---------- | -------- | ------- |
| *BAD BOX CODE* | <hidden-layer-two /> | B4 |
| *BAD ENGLISH NAME* | <hidden-layer-one /> | A4 |
| *BAD OR MISSING STROKE COUNTS* | <hidden-layer-one /> | A4 |
| *NOT A UNIQUE BOX CODE* | <hidden-layer-one /> | A4 |
| *REQUIRES VERSION* | <hidden-layer-two /> | C4 |
| *STROKE COUNT MISMATCH* | <hidden-layer-two /> | C4 |
| *UNKNOWN LANGUAGE* | <hidden-layer-one /> | B4 |

To see the meanings of the errors checked, go to [Editing Sheet Data § Errors](./editing-sheet-data#errors).

### More Reading
For those who want to learn more about how the spreadsheet is implemented, you are encouraged to read the formulas in the Sheet.

← [Go Back](./regular-score-list#more-explanation-on-regular-score-list)