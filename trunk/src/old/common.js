//forbid Right click for mouse
/*var message="Function Disabled!";
function clickIE4(){
	if (event.button==2){
		//alert(message);
		return false;
	}
}

function clickNS4(e){
	if (document.layers||document.getElementById&&!document.all){
		if (e.which==2||e.which==3){
			//alert(message);
			return false;
		}
	}
}

if (document.layers){
	document.captureEvents(Event.MOUSEDOWN);
	document.onmousedown=clickNS4;
}
else if (document.all&&!document.getElementById){
	document.onmousedown=clickIE4;
}

window.ondragstart = new Function("return false");

*/
// ------------------------------------------------------------------------//
// These functions are used on various pages throughout the UI Prototype.
// They may or may not appear in final production code!
// ------------------------------------------------------------------------//

//control page forward
var needToConfirm = false;
/* 
window.onbeforeunload = confirmExit;
function confirmExit(){
	
	if(needToConfirm)
		return cancelWindowConfirmMessage;
}*/



// ------------------------------------------------------------------------//
// This function detects IE, which we need to do to get around some IE issues
// Returns "true" if the browser is IE, "false" if not
var browserVersion = "appCodeName: " + navigator.appCodeName + "; appName: " + navigator.appName + "; appVersion: " + navigator.appVersion;

function isInternetExplorer() {
	var browserName=navigator.appName;
	var browserVer=parseInt(navigator.appVersion); 
	if (browserName == "Microsoft Internet Explorer") {
		// alert("Yes, it's really IE!!");
		return true; 
	} else {
		// alert("No, it's Firefox");
		return false;
	}
}


// ------------------------------------------------------------------------//

// ------------------------------------------------------------------------//
//in the host property&chart page, setting help url
function setHelp(url){
    try {
        //top.topManage.document.forms["getOptionInfoForm"].helpFileName.value = url;
    }catch (e) {
        try {
            //opener.top.topManage.document.forms["getOptionInfoForm"].helpFileName.value = url;
        }catch (e) {}
    }
}
// ------------------------------------------------------------------------//

// This function pops open a window. It orginated in Dreamweaver.
// windowObject param add by jichen at 20060529, this param is added for openning failure when there are same name window.
function MM_openBrWindow(theURL,winName,features, windowObject) { //v2.0
    var popupWindow;
	try{
		popupWindow = window.open(theURL,winName,features);
		try{
			wLength = features.indexOf("width=");
			hLength = features.indexOf(",height=");
			
			var windowWidth = features.substring(wLength+6,hLength);
			var windowHeight = features.substring(hLength+8,features.length);
			//alert(windowWidth + "--" + windowHeight + "--"+ isNaN(windowWidth) +"--"+
				//isNaN(windowHeight)+" windowWidth=" + screen.availWidth + " windowHeight=" + screen.availHeight)
			if(!isNaN(windowWidth) && !isNaN(windowHeight))
				popupWindow.resizeTo(windowWidth,windowHeight);
		}catch(e){}
		popupWindow.focus();
		return popupWindow;
	}catch(e){
        if(windowObject){
    		windowObject.focus();
	    	return windowObject;
        }
	}
}
 
// ------------------------------------------------------------------------//


// ------------------------------------------------------------------------//
// This function switches between tabs in some View Prefs and Properties
// windows. It changes tab content by controlling display of DIVs.


function switchTab(clickThisTab,showThis) {

  var showThisTab = clickThisTab.parentNode.id;
  var showThisTabContent = 'tabContent-'+showThis;
  var count = 1;
      
  // alert(showThisTab+", "+showThisTabContent);
      
  while (document.getElementById('tabContent-'+count)) {
    document.getElementById('tabContent-'+count).style.display = "none";
    document.getElementById('tab-'+count).className = "";
    count++;
  }
  
  document.getElementById(showThisTabContent).style.display = "block";
  document.getElementById(showThisTab).className = "currentTab";
      
}
 
// ------------------------------------------------------------------------//


// ------------------------------------------------------------------------//
// This function switches between tabs, but doesn't change any content.


function switchTabDisplay(clickThisTab) {

  var showThisTab = clickThisTab.parentNode.id;
  var count = 1;
      
  while (document.getElementById('tab-'+count)) {
    document.getElementById('tab-'+count).className = "";
    count++;
  }
  
  document.getElementById(showThisTab).className = "currentTab";

}
 
// ------------------------------------------------------------------------//


// ------------------------------------------------------------------------//
// This function hides and shows the filter/sort widget presented on list
// pages. It includes a hack for manipulating an iframe, which is needed
// to work around a bug in IE.


function toggleFilter(doWhat) {

	var filterDivOpened = document.getElementById('openedFilterPanel');
	var filterDivClosed = document.getElementById('closedFilterPanel');
	var iframeHack = document.getElementById('DivShim');
	var iframeHack2 = document.getElementById('DivShim2');
	
	if (doWhat == "hide") {
		filterDivOpened.style.display = "none";
		filterDivClosed.style.display = "block";
		
		// IE has a problem when a div is placed over top of a form element
		// See details below
		if(isInternetExplorer()) {
			iframeHack.style.display = "none";
			iframeHack2.style.display = "none";
		}
	} else {
		filterDivOpened.style.display = "block";
		filterDivClosed.style.display = "none";
		
		// IE has a problem when a div is placed over top of a form element: the
		// form element will show through the div. This bug can be worked around 
		// by putting an iframe behind the div. This part of the function
		// manipulates the iframe and a secondary framing div to provide the same
		// visual appearance as seen in Firefox (and any other self-respecting 
		// standards-compliant browser!).
		if(isInternetExplorer()) {
			filterDivOpened.style.zIndex=filterDivOpened.style.zIndex+1;
			iframeHack.style.position = "absolute";
			iframeHack.style.top = filterDivOpened.style.top;
			iframeHack.style.right = filterDivOpened.style.right;
			iframeHack.style.width = filterDivOpened.offsetWidth;
			iframeHack.style.height = filterDivOpened.offsetHeight;
			iframeHack.style.zIndex = filterDivOpened.style.zIndex - 2;
			
			// Should be able to use this form:
			// iframeHack.style.marginRight = filterDivOpened.style.marginRight; 
			// but IE seems broken on this attribute! The hard-coded number
			// needs to match value in css style div.filterPanelOpened
			iframeHack.style.marginRight = 9; 

			iframeHack.style.display = "block";
			
			// -----
			iframeHack2.style.position = "absolute";
			
			iframeHack2.style.top = filterDivOpened.style.top;
			iframeHack2.style.right = filterDivOpened.style.right;
			iframeHack2.style.width = filterDivOpened.offsetWidth;
			iframeHack2.style.height = filterDivOpened.offsetHeight;
			iframeHack2.style.zIndex = filterDivOpened.style.zIndex - 1;

			iframeHack2.style.borderTopWidth = 1; 
			iframeHack2.style.borderRightWidth = 1; 
			iframeHack2.style.borderBottomWidth = 1; 
			iframeHack2.style.borderLeftWidth = 1; 
			iframeHack2.style.borderStyle = "solid"; 
			iframeHack2.style.borderColor = "#000000"; 
			iframeHack2.style.backgroundColor = "#ffffff"; 

			iframeHack2.style.marginRight = 9; 

			iframeHack2.style.display = "block";

			filterDivOpened.style.border = "none";
			filterDivOpened.style.background = "none"; 
			filterDivOpened.style.zIndex=filterDivOpened.style.zIndex-1;
		}
	}
}




function ieFixFilter() {
	if (isInternetExplorer()) {
		 document.write("<iframe id='DivShim' src='../blank.htm' frameborder='0' scrolling='no' style='display: none;'></iframe>");
		 document.write("<div id='DivShim2' style='display: none'></div>");
	}
}

// ------------------------------------------------------------------------//



// ------------------------------------------------------------------------//
// Highlight a selected row is a list, or unhighlight a deselected row.
function hilightRow(rowNumber) {

    var thisRow = rowNumber.parentNode.parentNode;
    

    if (thisRow.className == "rowEven") {
      thisRow.className = "rowEvenSelected";

    } else if (thisRow.className == "rowOdd") {
      thisRow.className = "rowOddSelected";

    } else if (thisRow.className == "rowEvenSelected") {
      thisRow.className = "rowEven";

    } else if (thisRow.className == "rowOddSelected") {
      thisRow.className = "rowOdd";

    } else {
      thisRow.className = "rowEvenSelected";

    }
}
// ------------------------------------------------------------------------//



// ------------------------------------------------------------------------//
// Open a new window from Global Actions menu (or other).
function newWindowFromMenu(targ,selObj,restore,winHeight,winWidth,newWinName) {
  if(selObj.options[selObj.selectedIndex].value=="") {
    selObj.selectedIndex=0;
    return;
  }
  var winSpecs="width="+winWidth+",height="+winHeight+",toolbar=0,menubar=0,resizable=1,scrollbars=1";
  window.open(selObj.options[selObj.selectedIndex].value,newWinName,winSpecs);
  if (restore) selObj.selectedIndex=0;
}
// ------------------------------------------------------------------------//


// ------------------------------------------------------------------------//
// Call a function specified by a menu selection.
function callThisFuntion(selectedFunction) {

  if(selectedFunction.options[selectedFunction.selectedIndex].value=="") {
    selectedFunction.selectedIndex=0;
    return;
  }
  
  var selectedFunctionString = selectedFunction.value;

  var whichIndexSelected = selectedFunction.selectedIndex;
  
  // alert(whichIndexSelected);

  // alert("String: "+selectedFunctionString);
  
  var nameEndValue = selectedFunctionString.search(/,/);

  // alert("Position: "+nameEndValue);
  
  var callThisFunction = selectedFunctionString.slice(0,nameEndValue);
  
  // alert("Function to execute: "+callThisFunction);
  
  var passTheseVariables = selectedFunctionString.slice(nameEndValue+1,selectedFunctionString.length);
  
  var passTheseVariablesArray = passTheseVariables.split(",");

  // alert("Variables to pass: "+passTheseVariablesArray[0]);
  
	if (callThisFunction == "myTestFunction") {
		myTestFunction(passTheseVariablesArray[0],
					   passTheseVariablesArray[1],
					   passTheseVariablesArray[2]);

	} else if (callThisFunction == "toggleConfigItems") {
		toggleConfigItems(passTheseVariablesArray[0],selectedFunction.id,selectedFunction.selectedIndex);

	} else if (callThisFunction == "removeTimeInterval") {
		removeTimeInterval(passTheseVariablesArray[0]);

	} else if (callThisFunction == "showInsertTimeInterval") {
		showInsertTimeInterval();

	} else if (callThisFunction == "newWindowFromMenu") {
		newWindowFromMenu(passTheseVariablesArray[1],selectedFunction,'true','200','400','UserInput');

	} else if (callThisFunction == "--") {
		selectedFunction.selectedIndex=0;
	} else {
		alert("Ooops. Need to define function!");
	}
  
  // add in a delay here
  selectedFunction.selectedIndex=0;
}


// ------------------------------------------------------------------------//

function myTestFunction(whichMenu,second,third) {

	alert("This was passed: "+whichMenu+", "+second+", "+third);
	//alert("Which menu: "+whichMenu);
	alert("Second: "+second);
	//alert("Third: "+third);

}


function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

// ------------------------------------------------------------------------//
// This funtion toggles between selecting from a list and entering a name
// when adding objects to a collection
function toggleObjectAddition(entryMethod) {
  if (entryMethod == "text") {
     if (document.getElementById("objectAddFromList")) document.getElementById("objectAddFromList").style.display = "none";
     if (document.getElementById("objectAddFromText")) document.getElementById("objectAddFromText").style.display = "block";
  } else {
     if (document.getElementById("objectAddFromList")) document.getElementById("objectAddFromList").style.display = "block";
     if (document.getElementById("objectAddFromText")) document.getElementById("objectAddFromText").style.display = "none";
  }
}

// ------------------------------------------------------------------------//
// This function enables buttons when a form has been edited.
function enableButtons() {

	if(document.getElementById("buttonSave")) {
		document.getElementById("buttonSave").disabled="";
		document.getElementById("buttonSave").className="";
	}

	if(document.getElementById("buttonApply")) {
		document.getElementById("buttonApply").disabled="";
		document.getElementById("buttonApply").className="";
	}

	if(document.getElementById("buttonRevert")) {
		document.getElementById("buttonRevert").disabled="";
		document.getElementById("buttonRevert").className="";
	}

	if(document.getElementById("buttonPerformAction")) {
		document.getElementById("buttonPerformAction").disabled="";
		document.getElementById("buttonPerformAction").className="";
	}

}

// ------------------------------------------------------------------------//
// ------------------------------------------------------------------------//
// ------------------------------------------------------------------------//
// This function attaches an "onchange" event handler to form elements 
// (radio buttons, checkboces, text fileds). This facilitates enabling 
// buttons when the user has made changes to the form.
function addOnchangeHandlers() {

	for (var i = 0; i < document.getElementsByTagName("*").length; i++) {
	
		var thisElement = document.getElementsByTagName("*")[i];
		
		// *OK* Put handler on checkboxes that indicate lending and borrowing
		if (thisElement.type == "checkbox") {
			thisElement.onchange = function() { enableButtons(); }

		// *OK* Put handler on checkboxes that indicate lending and borrowing
		} else if (thisElement.type == "radio") {
			thisElement.onchange = function() { enableButtons(); }

		// *OK* Put event handlers on text fields, which contain values that user will edit
		} else if (thisElement.type == "text") {
			thisElement.onchange = function() { enableButtons(); }
			// thisElement.onblur = function() { clearFocus(); }
		}
		
	}	
	

}


// ------------------------------------------------------------------------//
// ------------------------------------------------------------------------//
// ------------------------------------------------------------------------//
// This function brings the specified window to the front (unless it has
// been minimized in Windows).
function bringDashboardToFront() {
   if((parent.opener != null) && (! parent.opener.closed)  ){
	   try{
		 var tmpClusterName = parent.opener.top.clusterName ;
		 // it will not throw exception when get variable value from parent window using IE browse
		 // if the parent window is away. But firefox will throw exception
		 if ( tmpClusterName == null )
         {
			 alert(noFindOpenerMessage);
		 }
		 else{
			 parent.opener.focus();	
		 }
       }
	   catch(e){
		 alert(noFindOpenerMessage);
	   }
   }else{
	 alert(noFindOpenerMessage);
   }

}


function isValidFilePath(fileName){
//    if( browserVersion.indexOf("Microsoft") != -1){
//	    if (fileName.indexOf(":\\",1) <= 0){		
//			return false;
//		}
//	}
	return true;
}

// ---------------------------------------------------------------------- //
//advanceTrim will delete all space of a string.
function advanceTrim(data){
	// Use ECMA-262 Edition 3 String and RegExp features
	data = data.replace(/[\t\n\r ]+/g, " ");
	if (data.charAt(0) == " ") data = data.substring(1, data.length);
	if (data.charAt(data.length - 1) == " ") data = data.substring(0, data.length - 1);
	return data;
}

// This function trim a String 
function Trim(s) 
{
	// Remove leading spaces and carriage returns
	while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r'))
	{ s = s.substring(1,s.length); }

	// Remove trailing spaces and carriage returns
	while ((s.substring(s.length-1,s.length) == ' ') || (s.substring(s.length-1,s.length) == '\n') || (s.substring(s.length-1,s.length) == '\r'))
	{ s = s.substring(0,s.length-1); }

	return s;
} 

//get resource for dashboard and mainconsole all tab or title.
function getResourceDesc(name, desc) {                                                                
	if(desc.indexOf("?")== -1){
	    return decodeURI(Trim(desc));
	}else{
	    return decodeURI(name);
	}
}

// ------------------------------------------ //
function getColumnName (columnDesc) {
                                                                
	var str= "";            
	if(columnDesc.indexOf("?")== -1){
	var str_array=columnDesc.split(";");
	str = str + str_array[0];
}
return Trim(str);
}
// ----------------------------------------------------------------------
function getColumnName2 (columnName, columnDesc) {                                                                
	if(columnDesc.indexOf("?")== -1){
	    var str= "";            
		var str_array=columnDesc.split(";");
		str = str + str_array[0];
    	return Trim(str);
	}else{
	    return decodeURI(columnName);
	}
}
// ----------------------------------------------------------------------
function getColumnPropName (columnDesc) {
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
// ----------------------------------------------------------------------
function getColumnPropName2 (columnName, columnDesc) {
    if(columnDesc.indexOf("?")== -1){
        var str= "";			
        var str_array=columnDesc.split(";");
        if (str_array.length<2){
            str = str + str_array[0];
        }
        else{  
            str = str + str_array[0]+ "(" + str_array[1] + ")";  
        }
        return str;
    }else{
		return columnName;
	}
}
// ---------------------------------------------------------------------- //
function  getColumnDescription (columnDesc) {

var str= "<th title='";
if(columnDesc.indexOf("?")== -1){
	var str_array=columnDesc.split(";");
	if (str_array.length<2) {
		str = str + str_array[0];     
	 }
	else {
		str = str + str_array[1]    
	 }
}     
str =str +"'>";
return str;                                                         
}
// ---------------------------------------------------------------------- //
function  getColumnDescription2 (columnName, columnDesc) {

	var str= "<th title=\"";
	if(columnDesc.indexOf("?")== -1){
		var str_array=columnDesc.split(";");
		if (str_array.length<2) {
			str = str + str_array[0];     
		}
		else{
			str = str + str_array[1];    
		}
	}else{
		str = str + columnName;
	}
	str =str +"\">";
	return str;                                                         
}

function  getColumnDescription3 (columnName, columnDesc) {

	var str= "<td title='";
	if(columnDesc.indexOf("?")== -1){
		var str_array=columnDesc.split(";");
		if (str_array.length<2) {
			str = str + str_array[0];     
		}
		else{
			str = str + str_array[1]    
		}
	}else{
		str = str + columnName;
	}
	str =str +"'>";
	return str;                                                         
}

//management summary table operation.useing to the custom tag
function generateModuleStatusBar(classprefix){

	var dataTotal = 0;
	
	for(var i=0;i<valueArray.length;i++){		
		dataTotal += parseInt(valueArray[i]);
		
	}
	
	var outString = "<table width=\"50\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" " +
					" class=\"barchart-state\"" +
					" title=\"";
	for(var i=0;i<titleArray.length - 1;i++){
	
		outString += titleArray[i] + ": " + valueArray[i] + "; ";
	}
    
	if (titleArray.length > 0)
	{
		outString += titleArray[titleArray.length - 1] + ": " + valueArray[titleArray.length - 1] 
	}

	outString += "\">" + " <tr> ";

	for(var i=0; i < valueArray.length; i++){
		if ( parseInt(valueArray[i]) > 0)
			outString = outString + "<td width=\"" + (50 * parseInt(valueArray[i]) / dataTotal) + "\" class=\"" + classprefix + titleArray[i].toLowerCase()+"\">&nbsp;</td>";
	}
	
	outString = outString + " </tr> </table> ";
	
	return outString;
}

//mangaement down/up page method
//var total, pageSize; 

function page(cmd){

    var form;
	if(document.forms && document.forms.length == 1){
		form = document.forms[0];
	}else{
		form = PlatForm_custom_filterTool_formObject;
	}

    var beginIdx ;
    
   
    beginIdx = form.beginIdx;
    

    switch(cmd){

       case 1: 
                       beginIdx.value = 1;
                       break;

       case 2:
                       beginIdx.value = parseInt(beginIdx.value) - pageSize;
                       if (beginIdx.value<1) {		       
		                   beginIdx.value = 1;		       
		               }                                             
                       break;

       case 3:
                       beginIdx.value = parseInt(beginIdx.value) + pageSize;
                       break;

       case 4:
                      if(total%pageSize==0){
                          beginIdx.value = total - pageSize + 1;
                      } else {
                          beginIdx.value = total - total%pageSize + 1;
                      }

                      break;

    }

    

    form.reload.value='0';
       
    form.submit();
}

function changeTagSortBy(sortBy){
	
    var form;
	if(document.forms && document.forms.length == 1){
		form = document.forms[0];
	}else{
		form = PlatForm_custom_filterTool_formObject;
	}
    
    if(form.sortBy.value==sortBy){
        if(form.sortDir.value=="descending"){
            form.sortDir.value="ascending";
        }else{
            form.sortDir.value="descending";
        }
    }else{
       form.sortDir.value="ascending";
       form.sortBy.value = sortBy;
    }
	//alert((sortBy)+";"+form.sortDir.value);
   
    form.reload.value='0';
    if(form.command)
    	form.command.value="";
		
	//Fix the bug:79852 
	//Do NOT change the value of the action.
	//form.action="";
	
	form.target="";
    form.submit();
}

//change Tab don't want refresh currently cache
function changeTagView(viewType){

	var form;

	if(document.forms && document.forms.length == 1){
		form = document.forms[0];
	}else{
		form = PlatForm_custom_filterTool_formObject;
	}

	form.viewType.value = viewType;

	form.reload.value='0';

	form.command.value = "";

	form.submit();

}

//change Tab want refresh currently cache

function changeViewTo(viewType){
	var form;
	if(document.forms && document.forms.length == 1){
		form = document.forms[0];
	}else{
		form = PlatForm_custom_filterTool_formObject;
	}

  form.viewType.value = viewType;

  form.reload.value='1';
  
  form.command.value = "";

  form.submit();

}

//refresh consumer Tree and consumer list
function windowRefresh(urL1, urL2){
	//alert(urL1);
	//top.frame_bottom.cols = "204,*";
	top.document.getElementById("frame_bottom").cols="204,*";
	parent.frames[2].location.href = urL1+"?hrefUrl="+urL2;
	
	//window.location.href="ConsumerTree.do";
	//var doc = window.frames['cList'].document;
	//parent.frames[1].windowRefresh();
	//window.location.href=urL2;
}
//refresh consumer Tree and consumer list
function windowRefreshTop(urL1, urL2, objectName){
	
	//top.frame_bottom.cols = "204,*"; 
	 
	var titles = new Array("topHost","topSession","topUser","topConsumer","toCluster");

	for(var i = 0; i < titles.length; i++){
		//alert(titles[i] + " == " + objectName);
		if(titles[i] == objectName){			
			document.getElementById(objectName).className = "currentTab";
		}else{
		    if ( document.getElementById(titles[i]) != null){
   			  document.getElementById(titles[i]).className = "";
   			}
		}
	}
	if(urL1 == ""){
		top.document.getElementById("frame_bottom").cols = "0,*";
		parent.frames[3].location.href = urL2;
	}else{
		top.document.getElementById("frame_bottom").cols = "204,*";
		parent.frames[2].location.href = urL1+"?hrefUrl="+urL2;
	}

}
//only refresh left consumer tree
function leftTreeRefresh(urL1, urL2){
    //if(browserVersion.indexOf("Microsoft") != -1)
	//top.document.getElementById("frame_bottom").cols = "204,*";
	//alert( urL1+"?hrefUrl="+urL2);
	//urL2 = urL2.replace('?', '&');
	try{
		if( typeof(MOD_CONSUMER) != "undefined" && MOD_CONSUMER == 'true'){
			parent.frames[3].location.href = urL2+"?currentlyPath=rootCluster20051101011001&permissionFlag=true&reload=1&date="+(new Date()).getTime()
		}else{
		var navTreeDisplay = parent.frames[2].document.getElementById("navTreeId").style.display;
		parent.frames[2].location.href = urL1+"&hrefUrl="+urL2+"&permissionFlag=true&date="+(new Date()).getTime()+"&navTreeDisplay="+navTreeDisplay;
		}
	}catch(e){}
}

//default: refreshConsumerTree method will reflash the left consumer tree and reflash the right frame too.
//If u do not set the "needReflashLeft" and "needReflashRight" parameters values.
//BTW, of course u do not need send the first parameter "url" too.
function reflashConsumerTree(currentlyPath , currentUrl , url, needReflashLeft , needReflashRight){
	if(parent != null && parent.frames.length >=2 && !(typeof(MOD_CONSUMER) != "undefined" && MOD_CONSUMER=='true')){
		var url = (url == "" || url == null)?"/egogui/consumer/consumerTree.jsp?":url;
		var refreshStr1 = (needReflashLeft == "" || needReflashLeft == null)?true:needReflashLeft;
		var refreshStr2 = (needReflashRight == "" || needReflashRight == null)?true:needReflashRight;
		
		var path = currentlyPath.replace(/\//g , '|');	
		var frame2 = parent.frames[2];
		
		var navTreeDisplay = frame2.document.getElementById("navTreeId").style.display;
		var parameters = "&hrefUrl="+ currentUrl + "&permissionFlag=true&date="+(new Date()).getTime()
			+"&navTreeDisplay=" + navTreeDisplay + "&leftRefreshFlag=" + refreshStr1 + "&allRefreshFlag=" 
			+ refreshStr2 + "&currentlyPath=" + path;
		
		frame2.location.href = url + parameters;
	}
}

//click refresh button
function clickRefreshButton(consumerTreeUrl, locationUrl, redirectUrl,resume){
	leftTreeRefresh(consumerTreeUrl, locationUrl);
	if(redirectUrl == '' || redirectUrl == null){
		if(resume != null && resume != ""){
			document.forms[0].command.value="";
			document.forms[0].submit();
		}else if(document.forms[0]){
			
			if(document.forms[0].reload){
				document.forms[0].reload.value="1";
			}
			if (document.forms[0].remainCurrentIdx){
				document.forms[0].remainCurrentIdx.value="Y";
			}
			if(document.forms[0].reload){
				document.forms[0].submit();
			}
			//window.location.reload();
		}else{
			window.location.reload();
		}
	}else{
		window.location.href=redirectUrl;
	}
}
 
// ------------------------------------------------------------------------//
var hostDetailWindowIndexJS = 0;
//var hostDetailWindowHeader= hostDetailWindowIndex;


var hostDetailWindowArray = new Array(4);

function getHostDetail(hostName, fromPage,sessionId){
	//parent then current open window
	var parentWindowObject;
	//grandparent then current open window
	var grandParentWindowObject;
	try{
		if((!!top.opener) && (! top.opener.closed))
			parentWindowObject = top.opener;
		if((!!top.opener.top.opener) && (!top.opener.top.opener.closed)  )
			grandParentWindowObject = top.opener.top.opener;
		
		if(!!grandParentWindowObject  ){
			hostDetailWindowIndexJS = grandParentWindowObject.top.hostDetailWindowIndex;
			hostDetailWindowArray = grandParentWindowObject.top.hostPopWindow;
		}else{
			if(!!parentWindowObject){
				hostDetailWindowIndexJS = parentWindowObject.top.hostDetailWindowIndex;
				hostDetailWindowArray = parentWindowObject.top.hostPopWindow;
			}
		}
	}catch(e){
		try{
			hostDetailWindowIndexJS = top.hostDetailWindowIndex;
			hostDetailWindowArray = top.hostPopWindow;
		}catch(e){}
		//alert("before " + e.message);
	}

	var hostDetailPageURL = '/'+PLATFORM_URL+'/host/hostDetail.jsp';
	/*
	try{	
		alert("mainconsole = " + top.opener.top.hostDetailWindowIndex);
		alert("dashboard = " + top.opener.top.opener.top.hostDetailWindowIndex);

		for (var i=0;i<4;i++) {
			alert(hostDetailWindowArray[i] + " hostDetailWindowIndexJS = " + hostDetailWindowIndexJS + "  index = " + i);
		} 
	}catch(e){
		alert("center " + e.message);
	}
	*/
	var hostDetailWindowHeader= hostDetailWindowIndexJS;

	if(hostDetailWindowIndexJS>=4) {  
		for (var i=0;i<4;i++) {
			
			if (hostDetailWindowArray[i] == null || hostDetailWindowArray[i].closed) {
				hostDetailWindowIndexJS--;
				hostDetailWindowHeader = i;
				break;
			}
		}  
    } 
    if(hostDetailWindowIndexJS>=4){
        
        alert(maxOpenHostsMsg);

    }else{
		hostDetailWindowArray[hostDetailWindowHeader]=MM_openBrWindow(hostDetailPageURL + '?hostname='+hostName+'&frompage='+fromPage+"&flag=false", 'HostDetail'+hostDetailWindowHeader+sessionId,'scrollbars=yes,resizable=yes,width=560,height=680');
		
		try{
			top.hostPopWindow[hostDetailWindowHeader] = hostDetailWindowArray[hostDetailWindowHeader];
			top.hostDetailWindowIndex = hostDetailWindowIndexJS+1;
			//alert("write to self = " + top.hostDetailWindowIndex);
		}catch(e){}

		//driectly open from dashboard or mainconsole page
		//alert(hostDetailWindowIndexJS);
		try{
		//open from mainconsole,set vaule to dashboard
			if(!!parentWindowObject){
				parentWindowObject.top.hostPopWindow[hostDetailWindowHeader]  = hostDetailWindowArray[hostDetailWindowHeader];
				parentWindowObject.top.hostDetailWindowIndex = hostDetailWindowIndexJS+1;
				//alert("write to dashboard or mainConsole = " + top.opener.top.hostDetailWindowIndex);
			}		
		}
		catch(e){}
        
		try{
		//open from hostgroup child of overlap, set value to dashboard
			if(!!grandParentWindowObject  ){
				grandParentWindowObject.top.hostPopWindow[hostDetailWindowHeader]  = hostDetailWindowArray[hostDetailWindowHeader];
				grandParentWindowObject.top.hostDetailWindowIndex = hostDetailWindowIndexJS+1;
				//alert("write to dashboard = " + top.opener.top.opener.top.hostDetailWindowIndex);
			}		
		}
		catch(e){}

	    hostDetailWindowIndexJS++;
        hostDetailWindowHeader=hostDetailWindowIndexJS;
		// set open windows num into cookie				
		incrementWindowCount('OPENWINDOWS');

        //online help doc about host property is not showed until the amendment scheme is estabished  
        //if ( top.topManage != null ) {
         //  top.topManage.document.forms["getOptionInfoForm"].helpFileName.value = "/" + PLATFORM_URL + "/help/host_properties.html";
		//}
	}
}

//format number
/*
*	previousLength: profix format
*	nextLength: postfix format
*/
function FormatNumber(previousLength, nextLength, inputValue, separator){
	
	var formatValue = inputValue;
	
	if(inputValue.indexOf(separator) != -1){
		
		for(var i = 0; i < inputValue.length; i++){
			
			if(inputValue.substring(i,i+1) == separator){
				//manager prefix
				if(previousLength != '' && !isNaN(previousLength)){
					
					previousLength = parseInt(previousLength);
					
					if(previousLength < i && previousLength > 0){

						formatValue = inputValue.substring(i-previousLength,i);

					}else{

						formatValue = inputValue.substring(0,i);
					}
				
				}else{
					
					formatValue = inputValue.substring(0,i);

				}
				
				//manager posefix
				if(nextLength != '' && !isNaN(nextLength)){
					
					nextLength = parseInt(nextLength);
					
					if((nextLength+i+1) < inputValue.length && nextLength > 0){

						formatValue += inputValue.substring(i,nextLength+i+1);

					}else{

						formatValue += inputValue.substring(i,inputValue.length);

					}
				
				}else{				
					formatValue += inputValue.substring(i,inputValue.length);					
				}				
				break;
			}
		}
	}
	return formatValue;	
}

//num is millisecond return date format: yyyy-MM-dd HH:mm:ss
function getDate(num){
	if(num != ""){
		var data1 = new Date(num);
		var year = data1.getFullYear();
		var month = (data1.getMonth()+1)+"";
		var date = (data1.getDate())+"";

		var hour = data1.getHours()+"";
		var minutes = data1.getMinutes()+"";
		var seconds  = data1.getSeconds()+"";


		if(month.length <= 1)
			month = "0"+month;
		if(date.length <= 1)
			date = "0"+date;

		if(hour.length <= 1)
			hour = "0"+hour;
		if(minutes.length <= 1)
			minutes = "0"+minutes;
		if(seconds.length <= 1)
			seconds = "0"+seconds;
		return (year +"-" + month + "-" + date + " " + hour + ":" + minutes + ":"+seconds);
	}	
}

document.oncontextmenu = new Function("return false");

var msg = 'That functionality is restricted.';
var asciiBack       = 8;
var asciiTab        = 9;
var asciiSHIFT      = 16;
var asciiCTRL       = 17;
var asciiALT        = 18;
var asciiHome       = 36;
var asciiLeftArrow  = 37;
var asciiRightArrow = 39;
var asciiMSL        = 91;
var asciiMS         = 92;
var asciiView       = 93;
var asciiF1         = 112;
var asciiF2         = 113;
var asciiF3         = 114;
var asciiF4         = 115;
var asciiF5         = 116;
var asciiF6         = 117;
var asciiF11        = 122;
var asciiF12        = 123;

if(document.all){ //ie has to block in the key down
    document.onkeydown = onKeyPress;
}else if (document.layers || document.getElementById){ //NS and mozilla have to block in the key press
    document.onkeypress = onKeyPress;
}

function onKeyPress(evt) {
    window.status = '';
    //get the event object
    var oEvent = (window.event) ? window.event : evt;
    
    //hmmm in mozilla this is jacked, so i have to record these seperate
    //what key was pressed
    var nKeyCode =  oEvent.keyCode ? oEvent.keyCode :
                    oEvent.which ? oEvent.which : 
                    void 0;
    
    var bIsFunctionKey = false;

    //hmmm in mozilla the keycode would contain a function key ONLY IF the charcode IS 0    
    //else key code and charcode read funny, the charcode for 't' 
    //returns 116, which is the same as the ascii for F5
    //SOOO,... to check if a the keycode is truly a function key, 
    //ONLY check when the charcode is null OR 0, IE returns null, mozilla returns 0 
    if(oEvent.charCode == null || oEvent.charCode == 0){ 
        bIsFunctionKey = (nKeyCode >= asciiF2 && nKeyCode <= asciiF12) || (   
                            nKeyCode == asciiALT || nKeyCode == asciiMSL || nKeyCode == asciiMS 
                            || nKeyCode == asciiView|| nKeyCode == asciiHome)
    }
    
    //convert the key to a character, makes for more readable code  
    var sChar = String.fromCharCode(nKeyCode).toUpperCase();

    //get the active tag that has the focus on the page, and its tag type
    var oTarget = (oEvent.target) ? oEvent.target : oEvent.srcElement;
    var sTag = oTarget.tagName.toLowerCase();
    var sTagType = sTag== "input"? oTarget.type : oTarget.getAttribute("type");
    
    var bAltPressed = (oEvent.altKey) ? oEvent.altKey : oEvent.modifiers & 1 > 0;
    var bShiftPressed = (oEvent.shiftKey) ? oEvent.shiftKey : oEvent.modifiers & 4 > 0;
    var bCtrlPressed = (oEvent.ctrlKey) ? oEvent.ctrlKey : oEvent.modifiers & 2 > 0;
    //var bMetaPressed = (oEvent.metaKey) ? oEvent.metaKey : oEvent.modifiers & 8 > 0;

    var bRet = true; //assume true as that will be the case most times
    //alert (nKeyCode + ' ' + sChar + ' ' + sTag + ' ' + sTagType + ' ' + bShiftPressed + ' ' + bCtrlPressed + ' ' + bAltPressed);

    if(sTagType != null){sTagType = sTagType.toLowerCase();}

    //allow these keys inside a text box
    if  (sTag == "textarea" || (sTag == "input" && (sTagType == "text" || sTagType == "password" || sTagType == "file"))
             && (nKeyCode == asciiSHIFT || nKeyCode == asciiHome || bShiftPressed || 
                (bCtrlPressed && (nKeyCode == asciiLeftArrow || nKeyCode == asciiRightArrow)))){
        return true;
    }else if(bAltPressed && (nKeyCode == asciiLeftArrow || nKeyCode == asciiRightArrow)){ // block alt + left or right arrow
        bRet = false;
    }else if(bCtrlPressed && (sChar == 'A' || sChar == 'C' || sChar == 'V' || sChar == 'X')){ // ALLOW cut, copy and paste, and SELECT ALL
        bRet = true;
    }else if(bShiftPressed && nKeyCode == asciiTab){//allow shift + tab
        bRet = true;
    }else if(bCtrlPressed && bAltPressed){//for 84623, allow Alt-Gr key: The ALTGR key is the RIGHT ALT key or the CTRL+LEFT ALT key on standard U.S. keyboard.
        bRet = true;
    }else if(bIsFunctionKey){ // Capture and stop these keys
        bRet = false;
    }else if(bCtrlPressed || bShiftPressed || bAltPressed){ //block ALL other sequences, includes CTRL+O, CTRL+P, CTRL+N, etc....
        bRet = false;
    }
    
    if(!bRet){
        try{
            oEvent.returnValue = false;
            oEvent.cancelBubble = true;

            if(document.all){ //IE
                oEvent.keyCode = 0;
            }else{ //NS
                oEvent.preventDefault();
                oEvent.stopPropagation();
            }
            window.status = msg; 
        }catch(ex){
            //alert(ex);
        }
    }
    return bRet;
}


//var defaultRefreshUrl = window.location.href;

function defultRefresh(){
	if(document.forms[0] && document.forms[0].reload){
		document.forms[0].reload.value = "1";
		document.forms[0].submit();
	}else{
		var url = window.location.href;
		
		var refreshIndex = (((index=url.indexOf("&reload")) == -1)?url.length:index);
		
		var refreshEnd = (((index=url.indexOf("&",refreshIndex+1)) == -1)?url.length:index);

		//alert("refreshIndex =" + refreshIndex + "  refreshEnd=" + refreshEnd + "  url.length = " + url.length);
		var urlLength = url.length;
		if(refreshIndex < urlLength){
			
			//var replaceValue = url.substring(refreshIndex, refreshEnd);

			url = url.substring(0,refreshIndex)+"&reload=1" + url.substring(refreshEnd, urlLength);
			
			//document.write(url);
		}else{
			url += "&reload=1";
		}
		
			
		refreshIndex = (((index=url.indexOf("&refreshTime")) == -1)?url.length:index);
		
		refreshEnd = (((index=url.indexOf("&",refreshIndex+1)) == -1)?url.length:index);

		//alert("refreshIndex =" + refreshIndex + "  refreshEnd=" + refreshEnd + "  url.length = " + url.length);
		var urlLength = url.length;
		if(refreshIndex < urlLength){
			
			//var replaceValue = url.substring(refreshIndex, refreshEnd);

			url = url.substring(0,refreshIndex)+"&refreshTime="+(new Date().getTime()) + url.substring(refreshEnd, urlLength);
			
			//document.write(url);
		}else{
			url += "&refreshTime="+(new Date().getTime());
		}
		window.location.href = url;
		//alert(url);
		/*defaultRefreshUrl = url;
		try{
			setTimeout("window.location.replace(defaultRefreshUrl);", 20);
		}catch(e){
			window.location.reload();
		}*/
	}
}

//user logon, session time out or token disabled
//sessionOutTimeMessage: warning message for session timeout
//tokenDisabledMessage: wraning message for token disabled
//condition: if currently module is VEM, condition = '', else condition is one string, the condition of logout require
//sessionTimeoutAction: judgement currently logout action implement how times.

function checkSessionTimeOut(sessionOutTimeMessage, tokenDisabledMessage, alertType, condition){
	try{
		//alert("AAA=" + top.sessionTimeoutAction)
		/*if(top.sessionTimeoutAction != null && top.sessionTimeoutAction)
			return;
		else*/
			top.sessionTimeoutAction = true;
	}catch(e){}

	try{	
		//alert("SSS=" + top.opener.top.sessionTimeoutAction);
		/*if(top.opener != null && !top.opener.closed && top.opener.top.sessionTimeoutAction != null && top.opener.top.sessionTimeoutAction)
			return;
		else*/
			top.opener.top.sessionTimeoutAction = true;
	}catch(e){}

	try{
		//alert("DDD=" + top.opener.top.opener.top.sessionTimeoutAction);
		/*if(top.opener.top.opener != null && !top.opener.top.opener.closed && top.opener.top.opener.top.sessionTimeoutAction != null && 
				top.opener.top.opener.top.sessionTimeoutAction)
			return;
		else*/
			top.opener.top.opener.top.sessionTimeoutAction = true;
	}catch(e){}
	
	/*
	if(alertType)
		alert(sessionOutTimeMessage);
	else
		alert(tokenDisabledMessage);
	*/
	try{
		//alert("ddd");
		operationLogout(condition);
	}catch(e){
		//alert(e.message);
		try{
			if(alertType)
				alert(sessionInvildate);
			else
				alert(tokenDisabledMessage);
			//currenlty window only leave hostproperty page
			if(top.checkReload)
				top.checkReload=false;
			if(top.window){
				top.window.close();
			}else{
				window.close();
			}
		}catch(e){}
	}
}

//logout method
function operationLogout(condition){
	//currently window have parent window, For example:mainConsole or hostproperty
	try{
		if ( top.opener != null && (! top.opener.closed) ) {
			//host resource group overlap page, user can view hostProperty, So, these should get it parent.parent
			var flag = false;
			try{
				if ( top.opener.top.opener != null && ( !top.opener.top.opener.closed)){
						top.opener.top.opener.top.performLogout(condition);
					
				}else{
					flag = true;
					top.opener.top.performLogout(condition);
					
				}
			}catch(e){
				if(flag)
					top.performLogout(condition);
				else
					top.opener.top.performLogout(condition);
			}

		//currently window doesn't parent window, For example:dashboard
		}else{

			top.performLogout(condition);

		}
	}catch(e){
		top.performLogout(condition);
	}
}

function cleanDivContent(divmsgId){
    var msgContainer = document.getElementById(divmsgId);
    if(msgContainer){
        var divChildren = msgContainer.childNodes;
        if(divChildren){
            for(var i=0; i<divChildren.length; i++){
                msgContainer.removeChild(divChildren[i]);
            }
        }
        msgContainer.style.display = "none";
    }    
}

function appendMsg2Div(divmsgId, msgStr){
    var msgContainer = document.getElementById(divmsgId);
    var msgElement = document.createTextNode(msgStr);
    if(msgContainer){
        cleanDivContent(divmsgId);
        msgContainer.appendChild(msgElement);
        msgContainer.style.display = "block";
    }else{
        alert(msgStr);
    }
}

//refresh status of 'Save' and 'Revert' button
/*
*param:isDisabledButtonState: null|''|'disabled'
*if isDisabledButtonState is null or '', we should set button status to enabled for 'Save' and 'Revert'
*else if isDisabledButtonStatewe is 'disabled', need set button status to disabled for 'Save' and 'Revert'
*/
function setButtonStatus(isDisabledButtonState){
	needToConfirm = true;
	if(isDisabledButtonState != null && isDisabledButtonState != '' && isDisabledButtonState == 'disabled'){
		if(document.getElementById("buttonSave")) {
		  document.getElementById("buttonSave").disabled = true;
		  document.getElementById("buttonSave").className="button-disabled";
		}
		if(document.getElementById("buttonRevert")) {
		  document.getElementById("buttonRevert").disabled = true;
		   document.getElementById("buttonRevert").className="button-disabled";
		}
	}else{
		if(document.getElementById("buttonSave")) {
		  document.getElementById("buttonSave").disabled = false;
		  document.getElementById("buttonSave").className="";
		}
		if(document.getElementById("buttonRevert")) {
		  document.getElementById("buttonRevert").disabled = false;
		   document.getElementById("buttonRevert").className="";
		}
	}
}

//add by jichen for onbeforeunload event in ViewPreference and other editable page;
function beforeUnloadEditableWindow(confirmMsg){
	if(needToConfirm){
        window.focus();
        return confirmMsg;
    }
}

function checkGeneralWindowUpdate(widowObject, isForce){
	if(widowObject && widowObject.open && !widowObject.closed && isForce){
        widowObject.needToConfirm = false;
    }

    if(widowObject && widowObject.open && !widowObject.closed && widowObject.needToConfirm){
        widowObject.focus();
        var agree = widowObject.confirm(top.implementOperationNoSaveChange); 
        if(!agree){
            return false;
        }else{
            widowObject.needToConfirm = false;
        }
    }
    return true;
}

function checkViewPreferenceUpdate(widowObject, isForce){

	if(widowObject && widowObject.open && !widowObject.closed && isForce && widowObject.document.forms[0]){
        widowObject.document.forms[0].isTouched.value = "false";
    }
	
    if(widowObject && widowObject.open && !widowObject.closed && widowObject.document.forms[0] 
		&& widowObject.document.forms[0].isTouched.value=="true"){
        widowObject.focus();
		if(!!top.implementOperationNoSaveChange)
		    var agree = widowObject.confirm(top.implementOperationNoSaveChange);
		else
			var agree = widowObject.confirm(top.consoleWindow.implementOperationNoSaveChange);
        if(!agree){
            return false;
        }else{
            widowObject.document.forms[0].isTouched.value = "false";
        }
    }
    return true;
}

function checkGeneralWindowExist(widowObject){
  if (widowObject && widowObject.open && !widowObject.closed)
      return true;
  return false;
}

function closeGeneralWindow(widowObject, isForce){
    if (widowObject && widowObject.open && !widowObject.closed){
		try{
            if(!!isForce)
                widowObject.needToConfirm = false;
        }catch(e){
        }
        widowObject.close();
    }
}
function closeViewPreference(widowObject, isForce){
    if (widowObject && widowObject.open && !widowObject.closed) {
		try{
            if(!!isForce && widowObject.document.forms[0])
                widowObject.document.forms[0].isTouched.value = "false";
        }catch(e){
        }
		widowObject.close();
	}
}

//config all hard code consumer node, them will be use to Batch & Service controller
function confirmSpecialNode(currentNode,configNode,alertMessage){
	//alert("currentNode= " + currentNode + "-- configNode = " + configNode);
	if(currentNode!= '' && configNode != '' && configNode != null && configNode.indexOf(currentNode+";") != -1){
		var agree = confirm(alertMessage);
		if(agree){
			return true;
		}else{
			return false;
		}
	}
	return true;
}

//control all popup window when the window is excess limiation
//return: -1 -- indicate user can't open more window, need to close some one
//         windowNameIndex -- indicate user can open more window, and the window's index is it.
function validatePopupWindow(windowObjArray){
	if(windowObjArray == null)
		return -1;
	var canBeOpen = false;
	var windowNameIndex = 0;
	var maxWindowNumber = windowObjArray.length;
	for(var i=0;i<maxWindowNumber;i++){
		var widowObject = windowObjArray[i];
		if(widowObject == null || widowObject.closed){
			canBeOpen = true;
			windowNameIndex = i;
			break;
		}else{
			widowObject = null;
			canBeOpen = false;
		}
	}
	if(!canBeOpen){
		alert(ALERTOPENWINDOWEXCESSLIMITATION);
		return -1;
	}
	return windowNameIndex;
}

//get parent window object of currently window 
function getContentFrame(){
    var frms = opener.top.frames;
    for (var i = 0; i < frms.length; i++) {
        if(frms[i].name == "mainFrame") {
	    return frms[i];   
        }
        else {
            var secondLevelFrms = frms[i].frames;
	    if (secondLevelFrms != null && secondLevelFrms.length > 0) {
                for (var j = 0; j < secondLevelFrms.length; j++) {
                    if(secondLevelFrms[j].name == "mainFrame") {
                        return secondLevelFrms[j];   
                    }
                }
            }
        }
    }
    return opener;
}


//display correct page in mainconsole
/**
*url : the module item url
*hasConsumerTree: if has consumer tree for the module
*consumerTreeURL: consumer tree url
*moduleName: the module name
*clusterName: the cluster name of EGO
*HAS_SYS_DE_GUI: for symphony DE GUI, the value=true, we need hide consumer tree, the value=false, don't do anything.
*/
function displayContent(url,hasConsumerTree,consumerTreeURL,moduleName,clusterName){

	//alert(url + "--" + hasConsumerTree);
	if(hasConsumerTree == '' || hasConsumerTree == 'no'){
		top.document.getElementById("frame_bottom").cols="0,*";
		if(url != "" && url.indexOf('?') < 0)
			url += "?";
		else
			url += "&";
		var tempHAS_IDE_ENV = top.HAS_IDE_ENV;
		top.HAS_IDE_ENV = "";
	    //parent.frames[3].location.href = url + "clusterName=" + clusterName + "&reload=1";			
    	//Fix the bug[76406] L.G[gliu@platform.com] switch the page by use ajax.
        ajaxSwitchPage(parent.frames[3] , url + "clusterName=" + clusterName + "&reload=1&HAS_IDE_ENV="+tempHAS_IDE_ENV + "&timer="+new Date().getTime());
	}else{
		//parent.frames[3].location.href="";
		top.document.getElementById("frame_bottom").cols="204,*";
		if(consumerTreeURL != "" && consumerTreeURL.indexOf('?') < 0)
			consumerTreeURL += "?";
		else
			consumerTreeURL += "&";
       
	   //parent.frames[2].location.href=consumerTreeURL + "hrefUrl=" + url + "&moduleName=" + moduleName + "&clusterName=" + clusterName;
       //Fix the bug[76406] L.G[gliu@platform.com] switch the page by use ajax.
       //if the page use the consumer tree , u should use the ajaxSwitchPageWithConsumer() method.
       var url = consumerTreeURL + "hrefUrl=" + url + "&moduleName=" + moduleName + "&clusterName=" + clusterName + + "&timer=" + new Date().getTime();
       ajaxSwitchPageWithConsumer(parent , url);
	}
}

function ajaxSwitchPageWithConsumer(_window , _url){
       _window.frames[2].location.href = "/common_ui/waitfor.htm";
       _window.frames[3].location.href = "/common_ui/waitfor.htm";

       var xmlHttp = XmlHttp.create();
       xmlHttp.open("GET", _url , true);
       xmlHttp.send(null);
       xmlHttp.onreadystatechange = function(){
            if (xmlHttp.readyState == 4) {
            	 _window.frames[2].location.href = _url;
            }
        }
}

function ajaxSwitchPage(_frame , _url){
       _frame.location.href = "/common_ui/waitfor.htm";

       var xmlHttp = XmlHttp.create();
       xmlHttp.open("GET", _url , true);
       xmlHttp.send(null);
       xmlHttp.onreadystatechange = function(){
			if (xmlHttp.readyState == 4) {
            	_frame.location.href = _url;
            }
       }
}


//delete one long string of inside a part
function delStrOfValue(strValue, part){
	var partLength = part.length;

	var cutStrValue = strValue;
	//alert("strValue = " + strValue + " part = " + part);
	for(var i = 0; i < strValue.length; i ++){
		//alert(i);
		if(strValue.substring(i, i+partLength) == part){
			cutStrValue = strValue.substring(0,i) + strValue.substring(i+partLength,strValue.length);
			break;
		}
	}
	//alert(cutStrValue);
	return cutStrValue;
}

//***************************************************************************
// Other methods
//***************************************************************************
var TIME_INTERVAL = 1000;
var intervalTime = 0;
var timer = setInterval(heartBeat , TIME_INTERVAL);
var needUpdateCookies = true;
//default value ;if the value = -1, we need get it from mainconsole.
var defaultSessionTime = -1;
//get session timeout defined form mainconsole page
function getSessionTimeoutDefined(){
	//default value = 30(minute) * 60(second)
	defaultSessionTime = 1800;
	try{
		//if the page as: Resource plan, need use this
		if(typeof(top.sessionTimeOutDefined) != 'undefined')
			defaultSessionTime = top.sessionTimeOutDefined;
	}catch(e){}
	try{		
		//if the page as:Service definition, need use this
		if(top.opener != null && (! top.opener.closed) ){
			if(typeof(top.opener.top.sessionTimeOutDefined) != 'undefined')
				defaultSessionTime = top.opener.top.sessionTimeOutDefined;
		}
	}catch(e){}
	try{	//other page
		if(top.opener.top.opener.top.opener != null && (! top.opener.top.opener.top.opener.closed)){ 
			if(typeof(top.opener.top.opener.top.sessionTimeOutDefined) != 'undefined')
				defaultSessionTime = top.opener.top.opener.top.sessionTimeOutDefined;
		}
	}catch(e){}
	return defaultSessionTime;
}
//attachFormEvent();
function attachFormEvent(){
	var form = document.forms[0];
	form.onkeypress = function(){
		try{
			checkWhetherTimeout();
		}catch(e){}
	};
}

function checkWhetherTimeout(){
	
	if(defaultSessionTime == -1)
		defaultSessionTime = getSessionTimeoutDefined();
	//session has timeout, need to logoff
	if(intervalTime > defaultSessionTime){
		try{
			//set the variable, then we can auto-logoff
			top.needToConfirm = false;
			window.location = window.location.href;
		}catch(e){
			window.location.reload();
		}
	}else{
		if(needUpdateCookies){
			try{
				//close the timer
				clearInterval(timer);
				
				//set date into cookie
				var loginDate = parseInt(get_cookie("platform.logindate"));
				setCookieLoginDate(loginDate + intervalTime*TIME_INTERVAL);
				//alert("loginDate:" + loginDate + "|" + loginDate + intervalTime*TIME_INTERVAL);
				
				//start up the timer
				intervalTime = 0;
				timer = setInterval(heartBeat , TIME_INTERVAL);
				
				//the "needUpdateCookies" value will be changed to true after one second.
				needUpdateCookies = false;
				setTimeout(timeOut, TIME_INTERVAL);
			}catch(e){}
		}
	}
}

function heartBeat(){
	intervalTime++;
}

function timeOut(){
	needUpdateCookies = true;
}

function overlibFixIE(hideoverlib, frameId){
    var overLibDiv = document.getElementById('overDiv');
	
	// IE has buggy behaviour when placing a div over a form element. This hack deals with the behaviour
	if(isInternetExplorer()) {
	
		if(!frameId) frameId = "DivShim";
	    if(!hideoverlib){
			// Identify the iframe
			iframeHack = document.getElementById(frameId);
	        if(!!iframeHack){
				// Position the iframe
				iframeHack.style.position = "absolute";//absolute | fixed | relative | static
				iframeHack.style.top = overLibDiv.style.top;
				iframeHack.style.right = overLibDiv.style.right;
				iframeHack.style.bottom = overLibDiv.style.bottom;
				iframeHack.style.left = overLibDiv.style.left;
				iframeHack.style.width = overLibDiv.offsetWidth;
				iframeHack.style.height = overLibDiv.offsetHeight;
				iframeHack.style.zIndex = overLibDiv.style.zIndex - 2;
				
				// Show the iframe
				iframeHack.style.display = "block";
			}
		}else{
		    iframeHack = document.getElementById(frameId);
		    if(iframeHack) iframeHack.style.display = "none";
		}
	}
}

//Return the error message from the error page which be defined in the structs-config.xml file.
//This method is very helpful if u want to get the result from the error file when the BaseAction
//throw an exception by use the Ajax framework.
function getErrorMsgFromErrorPage(errorDocument){
   var divStr = "";

   var divStr0 = "<textarea id=\"errorstr\"".toLowerCase();
   var divStr1 = "<div id=\"systemFailed\"".toLowerCase();
   var divStr2 = "<div id=\"errorMsg\"".toLowerCase();
   var divStr3 = "<div id=\"msg\"".toLowerCase();
   var divend = "</div>";
   var lowerDocument = errorDocument.toLowerCase();

   var erroridx = "";
   if(lowerDocument.indexOf(divStr0) != -1){
       erroridx = lowerDocument.indexOf(divStr0);
       divStr = divStr0;
       divend = "</textarea>";
   }else if(lowerDocument.indexOf(divStr1) != -1){
       erroridx = lowerDocument.indexOf(divStr1);
       divStr = divStr1;
   }else if(lowerDocument.indexOf(divStr2) != -1){
       erroridx = lowerDocument.indexOf(divStr2);
       divStr = divStr2;
   }else if(lowerDocument.indexOf(divStr3) != -1){
       erroridx = lowerDocument.indexOf(divStr3);
       divStr = divStr3;
   }else{
       erroridx =-1;
       return "";
   }

   //alert("divStr:" + divStr);
   //find the last '>' tag of <div>
   var splitDocument = errorDocument.substr(erroridx + divStr.length);
   var lastDivIdx = splitDocument.indexOf(">");
   //alert("Document(" + splitDocument + ")");

   var endidx = splitDocument.indexOf(divend);
   if(endidx == -1) return "";

   //alert("Document(" + splitDocument.substring(lastDivIdx + 1, endidx) + ")");
   return trim(splitDocument.substring(lastDivIdx + 1, endidx));
}

//TODO: getErrorMessageFromXmlhttp
//@xmlhttp xmlhttp object
function getErrorMessageFromXmlhttp(_xmlhttp){
    var error = "";
    var errorMessage = getErrorMsgFromErrorPage(_xmlhttp.responseText);
    if(errorMessage != ""){
       error = errorMessage;
    }else{
       error = _xmlhttp.responseText;
    }
    return error;
}

function openLobWizrd(mainconsoleWindowName, clusterName){
	if(typeof(MOD_APPLICATION) != "undefined" && MOD_APPLICATION!='false')
		url='/soamgui/loginDEAction.do?clusterName=' + clusterName;
	else
		url='/soamgui/loginLobAction.do?clusterName=' + clusterName;
		
	MM_openBrWindow(url, 'symphonywizard'+mainconsoleWindowName, 'scrollbars=yes,resizable=yes,width=600,height=600');
	
}
function isWebServerOKForAjax(xmlhttp){
	try{
		if(xmlhttp.status==null||xmlhttp.status==''||xmlhttp.status>10000){	
			return false;
		}
	}catch(e){
		return false;
	}
	return true;
}

function gotoBack(_url){
	location.href = "/egogui" + _url;
}


var viewportObj;
var viewportId;

//determine if undock or viewport,try to support undock window
function isViewport(){
	if(parent.parent.viewportMgr!=undefined)
		parent.viewportMgr=parent.parent.viewportMgr;
	if(typeof parent.viewportMgr=='undefined' || self==parent)
		return false;
	return true;
}

function openViewPrefernceInDialog(winName,url,vpid,vpTitle,width,height){
	
	//define viewport width and height
	var width=typeof width=='undefined'?500:width;
	var height=typeof height=='undefined'?500:height;

	var _parent = self.parent;
	if(self.parent.self.parent != null && self.parent.self.parent.viewportMgr!=null){
		_parent = self.parent.self.parent;
	}
	//create the viewport window.
	
	_parent.pmc_Basicpanel.launchDialogBoxPanel(url+"&vpid="+vpid, vpTitle,width,height,null,null);

}

//handle new lsfgui framework to close window
closeSelf=function(){
	if(current_vpid!='undefined' && current_vpid!='' && isViewport()){
		viewportObj = parent.viewportMgr.getViewportObj(current_vpid);
		viewportObj.Close();
	}else{
		self.close();
	}
}