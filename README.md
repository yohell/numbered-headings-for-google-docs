# numbered-headings-for-google-docs
User script to add automatic numbering for headings to google docs.

## Usage
Install Code.gs as a user script in one of your Google docs.

Then, click "Add-ons > Numbered headings > Update", to add automatic numbering to the 
headings in the document. Start a Heading1 with 1. to reset the numbering.

## Installation
In one of your Google docs, go to Tools > Script editor and replace the contents 
of Code.gs with the contents of this file. Replace the name "Untitled project" 
with e.g. "Numbered headings". This will register a menu item under "Add-ons > 
Numbered headings > Update" on document open. Click "Run > addToDocumentNow"
if you want to add the menu item right away, without closing and reopening the 
document.

## Credits
Credit to Paul Thomas for [original version](http://www.extended-content.com/google-docs-how-to-get-automatic-header-numbering/).

## Changes

Changes from original version:
* Menu item "Add-ons > Numbered headings > Update" to update the heading numbering.
* Start a Heading1 with 1. to reset the numbering.
* Manual page breaks do not break heading styles for the following heading.
* Use space instead of Tab as numbering separator.
