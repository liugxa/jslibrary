/**
* This class support a common way to catch and deal with(print the error message
* into the page) the exception by javascript.
* @constructor
*/
function JSString(){

	/**
	 * Whether the string constain the specail character.
	 * @param {String} the String to be validated
	 * @type boolean
	 */
	this.isValid = function(_str) {
		for (var i = 0; i < _str.length; i++){
			var ch = _str.charCodeAt(i);
			if(!_isValidChar(ch)) return false;
		}
		
		if (_isCharHyphen(_str.charCodeAt(0))) return false;
			return true;
	}

	/**
	* Trim the string
	* @param {String} the String will be trimed
	* @type String
	*/
	this.trim = function(_str){
		// Remove leading spaces and carriage returns
		while ((_str.substring(0,1) == ' ') || (_str.substring(0,1) == '\n') 
			|| (_str.substring(0,1) == '\r') || (_str.substring(0,1) == '\t')){
			_str = _str.substring(1,_str.length);
		}
		
		//Remove trailing spaces and carriage returns
		var chCode = _str.charCodeAt(_str.length-1);
		while (chCode==13 || chCode==10 || chCode==9 || chCode==32){
			_str = _str.substring(0,_str.length-1);
			chCode = _str.charCodeAt(_str.length-1);
		}
		return _str;
	}

	/**
	* Encode URI.
	* @param {String} the URI will be encoded
	* @type String
	*/
	this.encodeURI = function(_url){
		return encodeURIComponent(_uri);
	}

	/**
	* Decode URI
	* decode the url
	*/
	this.decodeURI = function(_uri){
		return decodeURIComponent(_uri)
	}

	/**
	* Validate the special character.
	* @param {Character}
	* @deprecated the method will be removed into the Validate.js file
	* @private
	*/
	function _isValidChar(ch){
		if((ch >= 48 && ch <= 57) || ( ch >= 65 && ch <= 90) ||(ch >= 97 && ch <= 122) || ch == 45 || ch == 95)
			return true;
		else
			return false;
	}

	/**
	* Validate the character is hyphen(-).
	* @param {Character}
	* @deprecated the method will be removed into the Validate.js file
	* @private
	*/
	function _isCharHyphen(ch){
		if(ch == 45)
			return true;
		else
			return false;
	}

	/**
	* Validate the character is period(.)
	* @param {Character}
	* @deprecated the method will be removed into the Validate.js file
	* @private
	*/
	function isCharPeriod(ch){
		if(ch == 46)
			return true;
		else
			return false;
	}
}