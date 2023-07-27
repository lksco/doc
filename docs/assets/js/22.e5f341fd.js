(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{403:function(e,t,r){"use strict";r.r(t);var o=r(27),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("← "),r("a",{attrs:{href:"./regular-score-list#more-explanation-on-regular-score-list"}},[e._v("Go Back")])]),e._v(" "),r("h2",{attrs:{id:"explaining-hidden-layers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#explaining-hidden-layers"}},[e._v("#")]),e._v(" Explaining Hidden Layers")]),e._v(" "),r("p",[e._v("This page explains the technical details of Hidden Layers. This page is entirely optional as all the necessary information for Readers and Operators are already covered in other pages.")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#explaining-hidden-layers"}},[e._v("Explaining Hidden Layers")]),r("ul",[r("li",[r("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),r("li",[r("a",{attrs:{href:"#sorting"}},[e._v("Sorting")])]),r("li",[r("a",{attrs:{href:"#data-processing"}},[e._v("Data Processing")])]),r("li",[r("a",{attrs:{href:"#error-catching"}},[e._v("Error Catching")])]),r("li",[r("a",{attrs:{href:"#more-reading"}},[e._v("More Reading")])])])])])]),r("p"),e._v(" "),r("h3",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("There are four sheets governing cell data from input page down to the displayed page. Sorting and data processing is automated.")]),e._v(" "),r("blockquote",[r("score-input-sheet"),e._v(" → "),r("hidden-layer-one"),e._v(" → "),r("hidden-layer-two"),e._v(" → "),r("regular-score-list")],1),e._v(" "),r("p",[e._v("Because of its technical difficulty, the data processing is split into multiple parts, with 2 'Hidden Layers' before the output. Each part consists of sorting, evaluation and error checking. Data from "),r("score-input-sheet"),e._v(" can be properly processed all the way down to "),r("regular-score-list"),e._v(".")],1),e._v(" "),r("p",[e._v("Generally, as the sole purpose of 'Hidden Layers' is to pass data from their previous layers to the next, they are never used by an Operator.")]),e._v(" "),r("p",[e._v("In the following sections, the three main parts of the data handling (Sorting, Data Processing, Error Checking) will be explained in detail.")]),e._v(" "),r("h3",{attrs:{id:"sorting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sorting"}},[e._v("#")]),e._v(" Sorting")]),e._v(" "),r("p",[e._v("Selected data from each layer are chosen and ported to the next layer with sorting. The whole sorting process is as follows:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/sort-illustration.png",alt:"Sorting Phase Illustration"}})]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("First Sort")]),e._v(" from "),r("score-input-sheet"),e._v(" to "),r("hidden-layer-one"),e._v(" "),r("ol",[r("li",[e._v("Sort by "),r("code",[e._v("Language")]),e._v(": Put English Scores before Chinese Scores.")]),e._v(" "),r("li",[e._v("Sort by "),r("code",[e._v("Stroke")]),e._v(": Sort in accending order according to first and total stroke. Porting stroke counts over 99 as 99.")]),e._v(" "),r("li",[e._v("Sort by "),r("code",[e._v("Item")]),e._v(": Put items with the same name together.")])]),e._v(" "),r("ul",[r("li",[r("code",[e._v("Folder")]),e._v(": Default is 1")])])],1),e._v(" "),r("li",[r("strong",[e._v("Second Sort")]),e._v(" from "),r("hidden-layer-one"),e._v(" to "),r("hidden-layer-two"),e._v(" "),r("ol",[r("li",[e._v("Sort by "),r("code",[e._v("CODE Part 1&2")]),e._v(": This code already determine the final order.")])]),e._v(" "),r("ul",[r("li",[e._v("All new-found illegal items are brought on top")])])],1),e._v(" "),r("li",[r("strong",[e._v("Third Sort")]),e._v(" from "),r("hidden-layer-two"),e._v(" to "),r("regular-score-list"),e._v(" "),r("ol",[r("li",[e._v("Final sort by "),r("code",[e._v("CODE with Part3")]),e._v(".")])]),e._v(" "),r("ul",[r("li",[e._v("All new-found illegal items are brought on top")])])],1)]),e._v(" "),r("h3",{attrs:{id:"data-processing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#data-processing"}},[e._v("#")]),e._v(" Data Processing")]),e._v(" "),r("p",[e._v("Below explains the functionalities of the columns "),r("strong",[e._v("inside Hidden Layers")]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"on-score-input-sheet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-score-input-sheet"}},[e._v("#")]),e._v(" On Score Input Sheet")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/score-input-sheet.png",alt:"Score Input Sheet"}})]),e._v(" "),r("ol",[r("li",[e._v("Input Page Columns\n"),r("ul",[r("li",[e._v("This interface allows the input of all the necessary information")]),e._v(" "),r("li",[e._v("These columns will be explained in "),r("RouterLink",{attrs:{to:"/operator/editing-sheet-data.html"}},[e._v("Editing Sheet Data")])],1)])])]),e._v(" "),r("h4",{attrs:{id:"on-hidden-layer-i"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-hidden-layer-i"}},[e._v("#")]),e._v(" On Hidden Layer I")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/hidden-layer-one.png",alt:"Hidden Layer I"}})]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("p",[r("code",[e._v("Character or Letter")]),e._v(" Column")]),e._v(" "),r("ul",[r("li",[e._v("For English scores, it takes first character from "),r("code",[e._v("Item")])]),e._v(" "),r("li",[e._v("For Chinese scores, it takes total number of characters from "),r("code",[e._v("Item")])])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("CODE Part 1&2")]),e._v(" Column")]),e._v(" "),r("ul",[r("li",[e._v("For English scores, it takes score type "),r("code",[e._v(".EN.")]),e._v(" and identifier from "),r("code",[e._v("Character or Letter")])]),e._v(" "),r("li",[e._v("For Chinese scores, it takes score type from "),r("code",[e._v("Character or Letter")]),e._v(" and identifier from in "),r("code",[e._v("Strokes")]),e._v(", combining "),r("code",[e._v("First")]),e._v(" and "),r("code",[e._v("Total")])])])])]),e._v(" "),r("h4",{attrs:{id:"on-hidden-layer-ii"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-hidden-layer-ii"}},[e._v("#")]),e._v(" On Hidden Layer II")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/hidden-layer-two.png",alt:"Hidden Layer II"}})]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[r("p",[r("code",[e._v("Individual Box Code")]),e._v(" is a helper column of "),r("code",[e._v("Place")]),e._v(". It copies "),r("code",[e._v("First Item Box Code")]),e._v(" to each item.")]),e._v(" "),r("blockquote",[r("p",[e._v("For example, all the items at or below First Item Box Code of T1#1 and above the next First Item Box Code will have a Individual Box Code of T1#1.")])])]),e._v(" "),r("li",[r("p",[r("code",[e._v("Place")]),e._v(" will then use "),r("code",[e._v("Individual Box Code")]),e._v(" to estimate the order of placement inside a box. Also, it performs an error check. (Error checking methods will not be explained. Please read the formulas if you are interested.)")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("Access")]),e._v(" (Access Code) is assigned for each item. It starts from 1; if the same "),r("code",[e._v("CODE Part1&2")]),e._v(" is encountered again, the access code should be increased by 1.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("CODE with Part3")]),e._v(" combines "),r("code",[e._v("CODE Part1&2")]),e._v(" and "),r("code",[e._v("Access Code")]),e._v(", and it is the final code on "),r("regular-score-list"),e._v(".")],1)]),e._v(" "),r("li",[r("p",[r("code",[e._v("Stroke Count Mismatch Check")]),e._v(" is a helper column of "),r("code",[e._v("CODE with Part3")]),e._v(" for error checking. (Error checking methods will not be explained. Please read the formulas if you are interested.)")])])]),e._v(" "),r("h4",{attrs:{id:"on-regular-score-list"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-regular-score-list"}},[e._v("#")]),e._v(" On Regular Score List")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/regular-score-list.png",alt:"Regular Score List"}})]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("When necessary information is copied onto "),r("regular-score-list"),e._v(":\n"),r("ul",[r("li",[e._v("The column name "),r("code",[e._v("CODE with Part3")]),e._v(" is abbreviated to "),r("code",[e._v("CODE")])]),e._v(" "),r("li",[e._v("The column name "),r("code",[e._v("First Item Box Code")]),e._v(" is abbreviated to "),r("code",[e._v("Box")]),e._v("\n(Note that "),r("code",[e._v("Box")]),e._v(" is unrelated to "),r("code",[e._v("Individual Box Code")]),e._v(" in "),r("hidden-layer-two"),e._v(")")],1)])],1),e._v(" "),r("li",[e._v("Output Page Columns\n"),r("ul",[r("li",[e._v("This interface spits out the useful information in sorted and processed form")]),e._v(" "),r("li",[e._v("These columns are explained in "),r("RouterLink",{attrs:{to:"/operator/regular-score-list.html"}},[e._v("Regular Score List")])],1)])])]),e._v(" "),r("h4",{attrs:{id:"other-notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-notes"}},[e._v("#")]),e._v(" Other Notes")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("code",[e._v("Entry")]),e._v(" column exists in various layers. It links each item on "),r("regular-score-list"),e._v(" to its input row on "),r("score-input-sheet"),e._v(" for easier navigation.")],1),e._v(" "),r("li",[e._v("All the sorting and column formulas are evaluated only if "),r("code",[e._v("Item")]),e._v(" is present. This is done by IF and FILTER checks.")])]),e._v(" "),r("h3",{attrs:{id:"error-catching"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#error-catching"}},[e._v("#")]),e._v(" Error Catching")]),e._v(" "),r("p",[e._v("During data processing, some values are checked to detect possible errors. The following illustrates the process:")]),e._v(" "),r("p",[r("img",{attrs:{src:"/doc/assets/img/error-illustration.png",alt:"Error Catching Illustration"}})]),e._v(" "),r("p",[e._v("In the illustration above, 'Error Checkers' check for errors on one or more 'Checked Columns'. When an error is caught, it will follow the route indicated by yellow arrows to each 'Error Receivers', until it displays on "),r("regular-score-list"),e._v(".")],1),e._v(" "),r("p",[e._v("Here is a reference to where errors are checked. You can look for the corresponding cells if you intend to read their formulas.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("Error Name")]),e._v(" "),r("th",[e._v("On Sheet")]),e._v(" "),r("th",[e._v("On Cell")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[r("em",[e._v("BAD BOX CODE")])]),e._v(" "),r("td",[r("hidden-layer-two")],1),e._v(" "),r("td",[e._v("B4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("BAD ENGLISH NAME")])]),e._v(" "),r("td",[r("hidden-layer-one")],1),e._v(" "),r("td",[e._v("A4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("BAD OR MISSING STROKE COUNTS")])]),e._v(" "),r("td",[r("hidden-layer-one")],1),e._v(" "),r("td",[e._v("A4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("NOT A UNIQUE BOX CODE")])]),e._v(" "),r("td",[r("hidden-layer-one")],1),e._v(" "),r("td",[e._v("A4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("REQUIRES VERSION")])]),e._v(" "),r("td",[r("hidden-layer-two")],1),e._v(" "),r("td",[e._v("C4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("STROKE COUNT MISMATCH")])]),e._v(" "),r("td",[r("hidden-layer-two")],1),e._v(" "),r("td",[e._v("C4")])]),e._v(" "),r("tr",[r("td",[r("em",[e._v("UNKNOWN LANGUAGE")])]),e._v(" "),r("td",[r("hidden-layer-one")],1),e._v(" "),r("td",[e._v("B4")])])])]),e._v(" "),r("p",[e._v("To see the meanings of the errors checked, go to "),r("a",{attrs:{href:"./editing-sheet-data#errors"}},[e._v("Editing Sheet Data § Errors")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"more-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-reading"}},[e._v("#")]),e._v(" More Reading")]),e._v(" "),r("p",[e._v("For those who want to learn more about how the spreadsheet is implemented, you are encouraged to read the formulas in the Sheet.")]),e._v(" "),r("p",[e._v("← "),r("a",{attrs:{href:"./regular-score-list#more-explanation-on-regular-score-list"}},[e._v("Go Back")])])])}),[],!1,null,null,null);t.default=a.exports}}]);