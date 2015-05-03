/**
* To initilize a javascript object by prototype
* @constructor
*/
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}

/**
* This class support a common way to add/remove the event on the elements
* @constructor
*/
function JSCommon(){

	var Global_Windows = [];

	/**
	* Pop up the window
	* @type Object
	*/
	this.openPopUpWindow = function(){
		var window = window.open(theURL,winName,features);
		Global_Window.push(window);
		
		window.focus();
		return window;
	}

	/**
	* Get pop up window
	* @param {String} window the opened window's name
	* @type Object
	*/
	this.getPopUpWindow = function(_windowName){
		var window = null;
		for(var i=0;i=Global_Window.length;i++){
			var w = Global_Window[i];
			if(w.name = _windowName){
				window = w;
		}
		return window;
	}
	 
	/**
	* Close the pop up window
	* @param {Object} window the opened window's handle
	* @type void
	*/
	this.closePopUpWindow = function(_windowHandle){
		Global_Window.pop(window);
		_windowHandle.close();
	}


	/**
	* disable righ click menu
	* @type void
	*/
	this.disableRightClick = function(){
		document.oncontextmenu = new Function("return false");	  
	}
	 
	/**
	* Alert message. By default, use the Javascript alert method
	* to display the message.
	* @param {String} _message
	* @type void
	*/
	this.alertMessage = function(_message){
		alert(_message);
	}


	/**
	* Get the machine's os type
	* @type String
	*/
	this.getOS:function(){
		var os;
		winRegExp = /\win/i
		if(winRegExp.test(window.navigator.platform)) os = 'win';
		
		macRegExp = /\mac/i
		if(macRegExp.test(window.navigator.platform)) os = 'mac';
		
		nixRegExp = /\unix|\linux|\sun/i
		if(nixRegExp.test(window.navigator.platform)) os = 'nix';
		
		return os;
	}

	/**
	* Get the client window height
	*/
	this.getClientHeight() {
		return f_filterResults (
			window.innerHeight ? window.innerHeight : 0,
			document.documentElement ? document.documentElement.clientHeight : 0,
			document.body ? document.body.clientHeight : 0
		);
	}

	/**
	* Get the scroll left position
	*/
	this.getScrollLeft() {
		return f_filterResults (
			window.pageXOffset ? window.pageXOffset : 0,
			document.documentElement ? document.documentElement.scrollLeft : 0,
			document.body ? document.body.scrollLeft : 0
		);
	}
	
	/**
	* Get the scroll top position
	*/
	this.getScrollTop() {
		return f_filterResults (
			window.pageYOffset ? window.pageYOffset : 0,
			document.documentElement ? document.documentElement.scrollTop : 0,
			document.body ? document.body.scrollTop : 0
		);
	}

	f_filterResults(n_win, n_docel, n_body) {
		var n_result = n_win ? n_win : 0;
		if (n_docel && (!n_result || (n_result > n_docel)))
			n_result = n_docel;
		return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
	}

}