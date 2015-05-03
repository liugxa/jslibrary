/* Reference Article:
Dustin Diaz:
http://www.dustindiaz.com/top-ten-javascript/
*/

/* addEvent: simplified event attachment */
function addEvent( obj, type, fn ) {
	if (obj.addEventListener) {
		obj.addEventListener( type, fn, false );
		EventCache.add(obj, type, fn);
	}
	else if (obj.attachEvent) {
		obj["e"+type+fn] = fn;
		obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
		obj.attachEvent( "on"+type, obj[type+fn] );
		EventCache.add(obj, type, fn);
	}
	else {
		obj["on"+type] = obj["e"+type+fn];
	}
}
	
var EventCache = function(){
	var listEvents = [];
	return {
		listEvents : listEvents,
		add : function(node, sEventName, fHandler){
			listEvents.push(arguments);
		},
		flush : function(){
			var i, item;
			for(i = listEvents.length - 1; i >= 0; i = i - 1){
				item = listEvents[i];
				if(item[0].removeEventListener){
					item[0].removeEventListener(item[1], item[2], item[3]);
				};
				if(item[1].substring(0, 2) != "on"){
					item[1] = "on" + item[1];
				};
				if(item[0].detachEvent){
					item[0].detachEvent(item[1], item[2]);
				};
				item[0][item[1]] = null;
			};
		}
	};
}();
addEvent(window,'unload',EventCache.flush);

/* window 'load' attachment */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

/* grab Elements from the DOM by className */
function getElementsByClass(searchClass,node,tag) {
	var classElements = new Array();
	if ( node == null )
		node = document;
	if ( tag == null )
		tag = '*';
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
	for (i = 0, j = 0; i < elsLen; i++) {
		if ( pattern.test(els[i].className) ) {
			classElements[j] = els[i];
			j++;
		}
	}
	return classElements;
}

/* toggle an element's display */
function toggle(obj) {
	var el = document.getElementById(obj);
	if ( el.style.display != 'none' ) {
		el.style.display = 'none';
	}
	else {
		el.style.display = '';
	}
}

/* insert an element after a particular node */
function insertAfter(parent, node, referenceNode) {
	parent.insertBefore(node, referenceNode.nextSibling);
}

/* Array prototype, matches value in array: returns bool */
Array.prototype.inArray = function (value) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

/* get, set, and delete cookies */
function getCookie( name ) {
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}
	
function setCookie( name, value, expires, path, domain, secure ) {
	var today = new Date();
	today.setTime( today.getTime() );
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	var expires_date = new Date( today.getTime() + (expires) );
	document.cookie = name+"="+escape( value ) +
		( ( expires ) ? ";expires="+expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) +
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}
	
function deleteCookie( name, path, domain ) {
	if ( getCookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

/* quick getElement reference */
function $() {
	var elements = new Array();
	for (var i = 0; i < arguments.length; i++) {
		var element = arguments[i];
		if (typeof element == 'string')
			element = document.getElementById(element);
		if (arguments.length == 1)
			return element;
		elements.push(element);
	}
	return elements;
}

// Find the position of an object on screen
function findPos(obj)
{
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		curleft = obj.offsetLeft
		curtop = obj.offsetTop
		while (obj = obj.offsetParent) {
			curleft += obj.offsetLeft
			curtop += obj.offsetTop
		}
	}
	return [curleft,curtop];
}

var browserName=navigator.appName;
var browserVer=parseInt(navigator.appVersion); 
function isInternetExplorer() {
	if (browserName == "Microsoft Internet Explorer") {
		//alert("Yes, it's really IE!!");
		return true; 
	} else {
		// alert("No, it's Firefox");
		return false;
	}
}

// Get the size of the brower window (works for IE and FF)
function getWindowSize() {

	if (parseInt(navigator.appVersion)>3) {
 		if (navigator.appName=="Netscape") 
		{
			winW = window.innerWidth;
			winH = window.innerHeight;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1) 
		{
			winW = document.documentElement.clientWidth;//document.body.offsetWidth;
			winH = document.documentElement.clientHeight;//document.body.offsetHeight;
		}
	}
	return [winH,winW];
}

function makeRequest(url, parameters) {

   try {
    netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
   } catch (e) {
    alert("Permission UniversalBrowserRead denied.");
   }

    http_request = false;
    http_request = new XMLHttpRequest();
    if (http_request.overrideMimeType) {
      http_request.overrideMimeType('text/xml');
    }
    if (!http_request) {
      alert('Cannot create XMLHTTP instance');
      return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url + parameters, true);
    http_request.send(null);
  }

  function alertContents() {
    if (http_request.readyState == 4) {
      if (http_request.status == 200) {

        var string = http_request.responseText;
      alert(string);

      } else {
        alert('There was a problem with the request.');
      }
    }
  }


// Odd or even
function isEven(num) {
  return !(num % 2);
}