/**
* This class support a common way to catch and deal with(print the error message
* into the page) the exception by javascript.
* @constructor
*/
function JSBrowser(){
	this.agent = window.navigator.userAgent.toLowerCase();

	/**
	* Check the browser is IE or not
	* @type boolean
	*/
	this.isIE = function(version){
		switch (version){
			case 6 : case '6' : {return this.agent.indexOf("msie 6") >= 0;};
			case  7  : case '7' : {return this.agent.indexOf("msie 7") >= 0;};
			case  8  : case '8' : {return this.agent.indexOf("msie 8") >= 0;};
			default  :            {return this.agent.indexOf("msie")   >= 0;};
		}
	}

	/**
	* Check the browser is Opera or not
	* @type boolean
	*/
	this.isOpera = function(){
		return (this.agent.indexOf("opera") >= 0) ? true : false;
	}

	/**
	* Check the browser is Mozilla(not Firefox!) or not
	* @type boolean
	*/
	this.isMozilla = function(){
		return (this.agent.indexOf("gecko") >= 0) ? true : false;
	}

	/**
	* Check the browser is Netscape or not
	* @type boolean
	*/
	this.isNetscape = function(){
		return (this.agent.indexOf("navigator") >= 0) ? true : false;
	}

	/**
	* Check the browser is Flock or not
	* @type boolean
	*/
	this.isFlock = function(){
		return (this.agent.indexOf("flock") >= 0) ? true : false;
	}

	/**
	* Check the browser is Safari or not
	* @type boolean
	*/
	this.isSafari = function(){
		return (this.agent.indexOf("safari") >= 0) ? true : false;
	}

	/**
	* Check the browser is Firefox or not
	* @type boolean
	*/
	this.isFirefox = function(){
		return (this.agent.indexOf("firefox") >= 0) ? true : false;
	}

	/**
	* Get the browser's version
	* @type double
	*/
	this.getVersion = function(){
		return (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1]
	}
}
