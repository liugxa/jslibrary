// ------------------------------------------------------------------------//
// These functions control the View Preferences pages in the UI Prototype.
// They may or may appear in final production code!
// ------------------------------------------------------------------------//
function beforeUnloadViewPreference(){
    if(document.forms[0].isTouched.value=="true"){
        window.focus();
        return closeViewPrefConfirmMsg;
    }
}

function setRowColour(rowId){
   var row = document.getElementById(rowId);
   var chkBtn = document.getElementById('chk'+rowId);
   if (window.navigator.userAgent.indexOf("MSIE")==-1){
	 if(chkBtn.checked){
        if((row.rowIndex)%2 == 0)
            row.className = "rowOddSelected";
        else
            row.className = "rowEvenSelected";
            
     } else {
        if((row.rowIndex)%2 == 0)
            row.className = "rowOdd";
        else
            row.className = "rowEven";

     }
   }else{
     if(chkBtn.checked){
        if((row.rowIndex)%2 == 0)
            row.className = "rowEvenSelected";
        else
            row.className = "rowOddSelected";
            
     } else {
        if((row.rowIndex)%2 == 0)
            row.className = "rowEven";
        else
            row.className = "rowOdd";

     }
  }
}
//reset button status for disabled some button.
function setDisabledStatus(rowId,replaceRowId){

	//set object name perfix
	var buttonDownPerfix = 'button'+'Down';
	var imgDownPerfix = 'img'+'Down';
	var buttonUpPerfix = 'button'+'Up';
	var imgUpPerfix = 'img'+'Up';

	var row = document.getElementById(rowId);
	//primary down object
	var buttonDown = document.getElementById(buttonDownPerfix + rowId);
	var imgDown = document.getElementById(imgDownPerfix + rowId);
	//primary up object
	var buttonUp = document.getElementById(buttonUpPerfix + rowId);
	var imgUp = document.getElementById(imgUpPerfix + rowId);

	var rRow = document.getElementById(replaceRowId);
	//replace with move down object
	var rdButton = document.getElementById(buttonDownPerfix + replaceRowId);
	var rdImg = document.getElementById(imgDownPerfix + replaceRowId);
	//replace with move up object
	var ruButton = document.getElementById(buttonUpPerfix + replaceRowId);
	var ruImg = document.getElementById(imgUpPerfix + replaceRowId);
	//alert("rowId = " + rowId +"-" +button.disabled + " replaceRowId = " + replaceRowId + "-" + rButton.disabled);
	
	var dDownImgUrl = applicationUrl+"/../common_ui/images/icon-columns-movedown-disabled.gif";
	var eDownImgUrl = applicationUrl+"/../common_ui/images/icon-columns-movedown.gif";
	var dUpImgUrl = applicationUrl+"/../common_ui/images/icon-columns-moveup-disabled.gif";
	var eUpImgUrl = applicationUrl+"/../common_ui/images/icon-columns-moveup.gif";
	
	if(buttonDown.disabled){
		buttonDown.disabled = "";
		imgDown.src = eDownImgUrl;

		rdButton.disabled = "disabled";
		rdImg.src = dDownImgUrl;

	}else if(rdButton.disabled){
		buttonDown.disabled = "disabled";
		rdImg.src = eDownImgUrl;
		
		rdButton.disabled = "";
		imgDown.src = dDownImgUrl;

	}
	if(buttonUp.disabled){
		buttonUp.disabled = "";
		imgUp.src = eUpImgUrl;

		ruButton.disabled = "disabled";
		ruImg.src = dUpImgUrl;

	}else if(ruButton.disabled){
		buttonUp.disabled = "disabled";
		imgUp.src = dUpImgUrl;

		ruButton.disabled = "";
		ruImg.src = eUpImgUrl;
	}
}

// ------------------------------------------------------------------------//
//Bugs in various browsers mean that "input" elements are not copied properly
//This code does it the hard way (http://www.pxl8.com/cloneNode_name_id_3.html)
function assignValues(origRow,newRow){
    var newInpt = newRow.getElementsByTagName('input');	
    var oldInpt = origRow.getElementsByTagName('input');

    for (i=0; i < newInpt.length; i++){
        if (newInpt[i].type == 'checkbox' || newInpt[i].type == 'radio'){
            if (oldInpt[i].checked != newInpt[i].checked ) {
                newInpt[i].setAttribute('checked',oldInpt[i].checked);
            }
        }
    }
}

function swapRows(node1,node2)
{
  var nextSibling = node1.nextSibling;
  var parentNode = node1.parentNode;
  var clonedNode1 = node1.cloneNode(true);
//  var clonedNode2 = node2.cloneNode(true);
  
//  parentNode.insertBefore(clonedNode2, nextSibling);
//  assignValues(node2,clonedNode2);
  parentNode.insertBefore(clonedNode1, node2);
  assignValues(node1,clonedNode1);
  
//  parentNode.removeChild(node2);
  parentNode.removeChild(node1);
  
  setRowColour(clonedNode1);
  setRowColour(node2);
  
}

function swapNode(node1,node2){
    //assumption: move node1 before node
    var nextSibling = node1.nextSibling;
    var parentNode = node1.parentNode;
    if (isInternetExplorer()){
        var clonedNode1 = node1.cloneNode(true);

        parentNode.insertBefore(clonedNode1, node2);
        assignValues(node1,clonedNode1);

        parentNode.removeChild(node1);
    }else { 
        parentNode.insertBefore(node1,node2);
    }
}

function moveUp(rowId)
{
    var row = document.getElementById(rowId);
    var previousRow = row.previousSibling;
    var rowIndex = 0;
	
    while( previousRow !=null && previousRow.tagName!="TR" && previousRow.rowIndex!=0 )
        previousRow = previousRow.previousSibling;

    if( previousRow==null )
        return; 
    if(!isInternetExplorer())
          rowIndex = previousRow.rowIndex + 1;
     else
          rowIndex = previousRow.rowIndex;
    if(rowIndex ==0 )
        return;   //Ignore the table header
    
	setDisabledStatus(rowId, previousRow.id);
    swapNode(row, previousRow);
    setRowColour(rowId);
    setRowColour(previousRow.id);
}
 
function moveDown(rowId)
{
    var row = document.getElementById(rowId);
    var nextRow = row.nextSibling;

    while(nextRow!=null && nextRow.tagName!="TR"){
        nextRow = nextRow.nextSibling;
    }
    if( nextRow==null )
        return;   //Ignore the table footer
	setDisabledStatus(rowId, nextRow.id);
    swapNode(nextRow, row);
    setRowColour(rowId);
    setRowColour(nextRow.id);
}

// ------------------------------------------------------------------------//
// Flash/blink the moved row in the page to make it clear that it has moved.

var initialClass =  "rowFlash";
var flashThisRow =  "t1-row2";
var flashCount = 0;

function flashMovedRow(whichRow) {

	if (flashCount < 6) {
	
		if (whichRow !== 'current') flashThisRow = whichRow;

		if (document.getElementById(flashThisRow).className == "rowFlash") {
		  document.getElementById(flashThisRow).className = initialClass;
		} else {
		  initialClass =  document.getElementById(flashThisRow).className;
		  document.getElementById(flashThisRow).className = "rowFlash";
		}
		  
		flashCount++;
		
		setTimeout("flashMovedRow('current')", 250);
	  
	} else {
	
	   flashCount = 0;
	   
	}

}




// ------------------------------------------------------------------------//
// Highlight a selected row, or unhighlight a deselected row.
function hilightRow(rowNumber,unHighlight) {

    var thisRow = rowNumber.parentNode.parentNode.id;
    

    if (document.getElementById(thisRow).className == "rowEven") {
      document.getElementById(thisRow).className = "rowEvenSelected";

    } else if (document.getElementById(thisRow).className == "rowOdd") {
      document.getElementById(thisRow).className = "rowOddSelected";


    } else if (document.getElementById(thisRow).className == "rowEvenSelected") {
      document.getElementById(thisRow).className = "rowEven";

    } else if (document.getElementById(thisRow).className == "rowOddSelected") {
      document.getElementById(thisRow).className = "rowOdd";


    } else {
      document.getElementById(thisRow).className = "rowEven";

    }
}

function getPrefsRow (columnDesc) {
    var str= "";			
    if(columnDesc.indexOf("?")== -1){
        var str_array=columnDesc.split(";");
        if (str_array.length<2){
            str = str + str_array[0];
        }
        else{  
            str = str + str_array[0]+ "(" + str_array[1] + ")";  
        }
    }
    return str;
}


//reset metric option
function resetMetric(array){
	for(var j=0;j<array.length;j++){
		var str=array.pop();
		if(str.indexOf("-")!=-1){
			var str_arr=str.split("-");
			if (str_arr[0]=="up")
				moveDown(str_arr[1]);
			if (str_arr[0]=="down")
				moveUp(str_arr[1]);
		}   
	}
}