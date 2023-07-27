---
pageTheme: blue
sidebarDepth: 2
---

# Introduction<!-- The Administrator Role -->
"The administrator" (or "administrators") is usually the music teacher that coordinates the Chinese Orchestra, or a personnel that can manage the continuation of the Orchestra. They need to control access of personnels. Rights should be granted and removed at suitable time.

The administrator should work with Score Managers (or Operators) on good terms and provide assistance when they need it. **In situations of conflict, the administrator should decide the best way to resolve it**.

This page will provide all relevant instructions for the administrator.

[[toc]]

## Prerequisites
The administrator should have Editor role. To access the ScoreList with such rights, you will need:  
* A Google Account - If you do not have one, please register [here](https://accounts.google.com)
* The Google Sheets App (Mobile) or Browser (PC)
* Editor Permission from an existing administrator or the [system manager](../operator/people-and-development#system-manager)

To get started on ScoreList:
* Open the [ScoreList](https://docs.google.com/spreadsheets/d/1V9uz-5N4GwmD1HQnuxjBj8iRKLUyiTaKfq2_NeQBZmo/edit?usp=sharing) for the first time
* Next time, go directly to the Google Sheets App (Mobile) or [Google Sheets](https://docs.google.com/spreadsheets) (PC); `LKSCO - ScoreList` should be among your list of recent documents

::: details Why we cannot grant ownership to administrators
It was planned to let administrators gain ownership. However, there is no rank other than Owner that allows editting locked cells. Cell locking and sheet locking are important due to the intricacy of the calculations, and the system manager must have access to these parts to fix technical issues.  
As Google Sheets does not provide an extra admin or moderator rank that allows full access, nor does it allow multiple owners, the only option is to grant Editor right to admins. The Editor role comes with the right to invite and promote people.  
**While both admins and trusted Operators are granted the same role of 'Editor', if a non-admin Editor misuse any rights, administrators can always contact the system manager to take necessary actions.**
:::

## Granting Access
::: warning Important
The admin should only grant access to trusted personnel, and revoke their rights once their role expires
:::

To grant a role to a person, you will need:
* The person's Google Account (E-mail)

Next, go to the [ScoreList Host Folder](https://drive.google.com/drive/folders/1_fp5PVgriJ9VGYI0rtV-D4Elmc4CJ_fZ):
1. Click the `Share` Icon
2. Enter the e-mail address of the person
3. Choose what level of access you want to give them
4. Click `Send`
5. Double check the e-mail address to be correct

### Levels of Access
Below serves as a general guideline to levels of access. However, administrators are entitled to make their own judgement and decisions when it comes to granting rights.

#### Viewer Role (Lowest)
The Viewer Role can be granted as a basic access to the ScoreList. This role can be granted to a person who is not an Operator but need to view the ScoreList to do simple jobs.

Once granted, the Viewer will be able to view (or copy/download) the Sheet. This role can be given more loosely to members of the Orchestra who are trusted with the information about our score storage.

#### Commentor Role
You can grant an Operator the Commentor Role if they are not trusted enough.

Once granted, in addition to all rights from lower roles, the Commentor will be able to make comments on the Sheet. Other Editors and Admins can then review their comment and make changes to the Sheet.

#### Editor Role (Highest)
This role should be granted for all well-trusted Operators who need to modify the ScoreList.

Once granted, in addition to all rights from lower roles, the Editor will be able to directly modify the ScoreList. Such right shall be revoked if the person misbehaves.

### Demotion
A person can be considered for demotion for the following reasons:
* If a person with Editor Role misbehaves or was subject to vandalism, they can be demoted to Commentor for a certain amount of time. Repeat offenders can be demoted to Viewer or removed from all rights.
* If a person with Commentor Role misbehaves or was subject to comment spamming, they can be demoted to Viewer or removed from all rights.
* If a person finishes their service as an Operator, they should be demoted and remained as a Commentor.
* A non-admin Editor attempting to invite unauthorized accounts or demote any administrator will result in an instant demotion to Viewer or removal of all rights until further explanations are made.

## Knowledge of Operations

Though not necessary, it is recommended for adminstrators to understand the operations available to operators, so that they can assist operators when needed.

**Please Read: [Guide:Operator](../operator)**

## Technical Assistance

For issues that cannot be resolved, technical problems on the Sheet, feedback or suggestions, please contact [System Manager](../operator/people-and-development#system-manager).