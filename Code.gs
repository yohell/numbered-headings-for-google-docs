// Installation:
// In one of your Google docs, go to Tools > Script editor and replace the contents 
// of Code.gs with the contents of this file. Replace the name "Untitled project" 
// with e.g. "Numbered headings". Now, when you later open this document again, you 
// will have a menu item under Add-ons > Numbered headings > Update that will add
// automatic numbering to the headings in this document. Click Run > addToDocumentNow
// if you want to add the menu item right away without closing and opening the document.
//
// Start a Heading1 with 1. to reset the numbering.

function addToDocumentNow() {
  onOpen();
}

function onOpen(e) {
  DocumentApp.getUi().createAddonMenu()
    .addItem('Update', 'updateHeadingNumbering')
    .addToUi();
}

function updateHeadingNumbering() {
  var pars = DocumentApp.getActiveDocument().getBody().getParagraphs();
  var counterHeader = [0, 0, 0, 0, 0, 0];
  for (var i = 0; i < pars.length; i++) {
    var par = pars[i];
    var hdg = par.getHeading();
    if (hdg == DocumentApp.ParagraphHeading.HEADING1) {
      if (par.getText().split(' ')[0] == '1.') {
        counterHeader = [0, 0, 0, 0, 0, 0];
      }
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING1, par, 0, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING2) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING2, par, 1, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING3) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING3, par, 2, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING4) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING4, par, 3, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING5) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING5, par, 4, counterHeader);
    } else if (hdg == DocumentApp.ParagraphHeading.HEADING6) {
      _addNumberingForHeaderType(DocumentApp.ParagraphHeading.HEADING6, par, 5, counterHeader);
    }
  }
}

function _addNumberingForHeaderType(headerType, paragraph, initIndex, counterHeader) {
  counterHeader[initIndex] = counterHeader[initIndex] + 1;
  var currCounter = _getCurrenNumbering(initIndex, counterHeader);
  for (var ii = initIndex + 1; ii < counterHeader.length; ii++) {
    counterHeader[ii] = 0;
  }
  var content = paragraph.getText();
  var parts = content.split('. '); 
  if (parts.length > 1) {
    paragraph.replaceText(".*", currCounter + '. ' + parts[1]);
  } else {
    paragraph.replaceText(".*", currCounter + '. ' + parts[0]);
  }
}

function _getCurrenNumbering(initIndex, counterHeader) {
  var value = '';
  for (var i = 0; i <= initIndex; i++) {
    if (value) {
      value += '.';
    }
    value += counterHeader[i];
  }
  return value;
}
