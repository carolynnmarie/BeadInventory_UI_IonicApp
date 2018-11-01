IONIC BEAD STORE LIST HELPER APP

An Ionic App that will be the UI front end for the "Bead Inventory Database" Spring Boot RESTful Service program I created
Will enable the user to pull up inventory of current supplies and lists of items to be purchased.

WHAT THE APP WILL LOOK LIKE WHEN IT IS FINISHED
there will be the following tabs at bottom of each page: 
home
search -goes to general search page
store list 

It will also have a “back” button on the top left corner of all pages to navigate back to the previous page

HOME PAGE
page has 7 buttons: top button: “Go to Store Lists”, normal looking button, then 3 buttons grouped together, 
stacked vertically, labeled “Search All Beads”, “Search All Findings”, and “Search All Stringing Materials”, 
then 3 small button, in a row with “display all” above them then the buttons entitled “beads”, “findings”, and 
“stringing materials” - upon click will execute a get all query and display on the search results page

SEARCH PAGE
has 3 buttons: “Search Beads”, “Search Findings”, and “Search Stringing Materials”
the “Search Beads”, “Search Findings”, and “Search Stringing Materials” buttons on  both the home page and generic 
search page will go to the same respective specific page, 

Search Beads, Search Findings, and Search Stringing Materials Pages
They will be separate pages, as they each have different search options and parameters
-will have drop-down menu bars, stacked vertically, for the different search options, only the enums,
with the name of the parameter immediately above each drop-down menu.  Depending on what parameter(s) are selected 
the appropriate get query will be done and sent to the “Search Results” page

Search Results Page
-displayed as a regular list, no slide bar
- each “get” query will have try/catch with the catch to display text “no matches, try a new search”, with a button 
“go back to search page” that will go back one page
-no “add” or “delete” options on search results page

STORE LIST PAGE
– will have buttons, stacked horizontally, for each different list, the title of the list (from the “title” column of the 
store list entity) as the text on the button – click the button and the “get” query will bring up the corresponding list 

Specific List Page – will display the name of the list as the header on the page 
-will display list first listing beads under a heading “beads:”, then “findings”, then “stringing materials”, the 
“other items”
-items will be displayed individually by a custom override toString method
-will wrap text to next line when necessary, will not have a horizontal scroll bar
-will have the ability for variable length, with a scroll bar on the right side
-will display items as a slide bar list with a “delete” option showing on the right when item slid over
-will have an “add item” button on top, will bring a popup screen with all the requisite required fields, and an 
“add item” button on the bottom that will add the item to the list.
	-this will be done in the code through a modal
