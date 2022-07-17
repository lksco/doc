---
pageTheme: blue
---

# Handling Existing Scores
It is important to understand the standard procedures of handling scores.

::: warning Notice
This section is based on the implementation of the physical storage **at the time of writing**. It is potentially outdated by the time you read this.  
You may **inform and get an update** by [contacting System Manager](./people-and-development#system-manager).  
:::

::: warning Terminology
Refer to [Terminology](./outline#terminology) for specific terms used on this page.
:::

[[toc]]

## Standard Take Out
Suppose you want to take a specific Item from the Storage.
1. Find the Item on <regular-score-list /> or <special-score-list />
    * For those who need it, this is [how you find an Item](./editing-sheet-data#google-sheets-skills)
2. Locate Box and Position
    * For <regular-scores />, look for `Box` and `Place`
    * Note that `Place` is an '**Item Count** from Top', not a '**Folder Count** from Top'
    * For Special Scores, get Box **SP**
3. Take out the Folders
    * The actual position should be the same as on ScoreList
    * If not, take an extra step - rearrange the score in matching order
    * If the score is apparently missing, please [trace score and declare missing](./general-management#declare-missing)
4. (Optional) Insert Indicator
    * The indicator ([Picture](#indicators-look-like-this)) substitutes the position of the taken-out score and makes an easier put-in later
    * It can be an empty folder or a piece of paper, placed upright
5. Record Volatile Score Status
    * If the score is to leave the Storeroom/Box, mark a circle ◯ in `STATUS|MARKING` **on the Hard-copy** (NOT on Google Sheets)
::: tip
An **empty** circle in `STATUS|MARKING` should mean the score was taken.  
All other scores should be inside the boxes, or they should be declared 'Missing' in `Remarks`.
:::

## Standard Put In
Suppose you have an Item already recorded in ScoreList (not a New Item) and want to store it.  

1. Find the Item on <regular-score-list /> or <special-score-list />
    * If you cannot find the Item, follow [Add Score](./editing-sheet-data#add-score)
2. Locate Box and Position
    * An indicator may be present at the position
3. Put in the Folders into the Correct Position
    * For <regular-scores />:
      * Check if the score is contained in a Standard Folder. If not, put the score into a new Standard Folder
      * Check if the Folder Count is the same as on ScoreList. If not, update the Folder Count
    * For <technical-papers />, if you are adding a category, take new Standard Folder
    * If Standard Folders in the Storeroom are used up, ask your Music Teacher for more
    * If one Folder is full, resolve through [**Folder Change**](#folder-change)
    * If one Box is full, resolve through [**Box Change**](#box-change)
4. Remove any Indicator
5. Record Volatile Score Status
    * If there exists one, put a tick ✓ in empty circle in `STATUS|MARKING` **on the Hard-copy**

> #### Indicators Look Like This
> ![An Indicator](/doc/assets/img/indicator.png)

::: warning Special Note on Handling <oversized-scores />
<p>For <oversized-scores />, most of the music sheets are <strong>not clipped together neatly</strong>. Mishandling may cause confusion in storage. Take precautions:</p>

* On Take Out, check that you take every page and all pieces of paper
* On Put In, make sure that you do not put one score in the middle of another
:::

## Folder Change
**(Folder Change resolves for [**Standard Put In**](#standard-put-in) when folder full)**  

If a folder is full:
* Get a new Standard Folder
* Put it behind existing folders of that Score/Category
* On Google Sheets:
  * For <regular-scores />, update Folder Count in `Folders`
  * For <technical-papers />, update Folder Count in `Remarks`

## Box Change
**(Box Change resolves for [**Standard Put In**](#standard-put-in) when box full)**  

Suppose an item should be stored in its box (Step 1 in picture below). Sometimes, the box may not have enough space for that item. The operation of freeing spaces and storing all items in order is called Box Change, and it will involve `current box` and some or all `subsequent boxes`. The entire process is illustrated below:  

![Box Change Rule](/doc/assets/img/box-illustration.png)  

General Rule: If one box does not have space, extra items that are overflow **at the BACK** should move to the FRONT of the next box. Repeat that **until all items are stored in box** (Step 2).  

If the `last box` does not have enough space, proceed to (Step 3):  
* Open a new box
  * Ask your Music Teacher for a new box
  * To consolidate the new box, put at least 3 tapes across the under-side, and at least 3 inside and bottom of the box. Also, put tape on the 2 short side on the under-side of the box.
  * Use an **ink pen** to write the new Box Code on the **front and long side**
* Divide the items between `last box` and `new box` to make sure scores will not collapse. ([Picture](#good-practices))

After Box Change, you MUST (Final Step):  
* For <regular-scores />, mark down all the changes (if any) to `First Item Box Code` on Hard-copy as a note (See example below)
* Access Google Sheets and make such changes onto the ScoreList
  * If a `First Item Box Code` already exists, **MOVE** it or **COPY OVER AND DELETE** the previous, or else there will be an illegal duplicate

> #### Example of Marking Down Changes to `First Item Box Code`
> ![Notes on Box Change](/doc/assets/img/box-change.png)  
> Note that after taking notes, one must make the same changes on Google Sheets  

#### Do it your own way, if you want to
Note that the order of scores is NOT changed at any point during Box Change, and should be the same as on ScoreList.  
As long as the order is not affected, you may choose not to follow the procedure stated above and rearrange boxes/scores in your own way.  

#### Good Practices
Take note of the good practices below before handling boxes:  
* No need to force an item into a box. Leaving space is better than potentially damaging boxes
* Ensure scores will not collapse in a box  
  ![Collapse Rule](/doc/assets/img/collapse-illustration.png)
* Divide items from neighbouring boxes to put enough items in each box and prevent collapse  
  ![Distribution Rule](/doc/assets/img/distribution-illustration.png)
* Fillers can be added to support the scores  
  ![Filler 1](/doc/assets/img/filler-1.png) ![Filler 2](/doc/assets/img/filler-2.png)

## Quick Actions
Sometimes you do not want to take away the item. You would take out an item, then put it back in right after. In the middle, you perform an action, such as:
* Perform a check-up on one item
* <regular-scores />: Change what is inside a Score Folder, e.g. taking/puting a part score
* <technical-papers />: Put new materials into a Folder of a Category (Note: This is usually the only operation on <technical-papers />)

These are called Quick Actions. To perform a Quick Action:
1. Find the Item Name on <regular-score-list /> or <special-score-list />
2. Locate Box and Position
3. Take out the item and perform the action
4. Put back the item before you leave

::: tip
When you add or remove stuff from a folder, the folder could be full or too fat to fit in its position. If that happens, follow [Folder Change](#folder-change) or [Box Change](#box-change) to resolve.
:::