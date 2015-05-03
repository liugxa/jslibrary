/**
* JSValidate object.
* @constructor
*/
function JSValidate(){

	/**
	* Validate the data contain the special character, return true.
	* @param {Object} data
	* @param {String} characters
	* @param {String} sensitive
	* @type boolean
	*/
	this.hasValidChars = function(s, characters, caseSensitive){
		function escapeSpecials(s){
			return s.replace(new RegExp("([\\\\-])", "g"), "\\$1");
		}
		return new RegExp("^[" + escapeSpecials(characters) + "]+$",(!caseSensitive ? "i" : "")).test(s);
	}

	/**
	* Validate the data is ip or not
	* @param {Object} data
	* @type boolean
	*/
	this.isSimpleIP = function(ip){
		ipRegExp = /^(([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+)\.([0-2]*[0-9]+[0-9]+))$/
		return ipRegExp.test(ip);
	}

	/**
	* Validate the data is alpha letter or not
	* @param {Object} data
	* @type boolean
	*/
	this.isAlphaLatin = function(string){
		alphaRegExp = /^[0-9a-z]+$/i
		return alphaRegExp.test(string);
	}

	/**
	* Validate the data is non empty or not
	* @param {Object} data
	* @type boolean
	*/
	this.isNotEmpty = function (string){
		return /\S/.test(string);
	}

	/**
	* Validate the data is empty or not
	* @param {Object} data
	* @type boolean
	*/
	this.isEmpty = function(s){
		return !/\S/.test(s);
	}

	/**
	* Validate the data is integer or not
	* @param {Object} data
	* @type boolean
	*/
	this.isInteger = function(n){
		numberExp = /^-?\d+$/
		return numberExp.test(n);
	}

	/**
	* Validate the data is positive integer or not
	* @param {Object} data
	* @type boolean
	*/
	this.isPositiveInteger = function(n){
		regex = /^[0-9]*[1-9][0-9]*$/
		return regex.test(n);
	}

	/**
	* Validate the data is non positive integer or not
	* @param {Object} data
	* @type boolean
	*/
	this.isNonPositiveInteger = function(n){
		regex = /^((-\d+)|(0+))$/
		return regex.test(n);
	}

	/**
	* Validate the data is non negative integer or not
	* @param {Object} data
	* @type boolean
	*/
	this.isNonNegativeInteger = function(n){
		//var regex = /^[1-9]\d*|0$/; error
		var regex = /^((\d+)|(0+))$/;
		return regex.test(n);
	}

	/**
	* Validate the data is integer in range or not
	* @param {Object} data
	* @param {int} min
	* @param {int} max
	* @type boolean
	*/
	this.isIntegerInRange = function(n,Nmin,Nmax){
		var num = Number(n);
		if(isNaN(num)){
			return false;
		}
		if(num != Math.round(num)){
			return false;
		}
		return (num >= Nmin && num <= Nmax);
	}

	/**
	* Validate the data is number or not
	* @param {Object} data
	* @type boolean
	*/
	this.isNum = function(number){
		numRegExp = /^[0-9]+$/
		return numRegExp.test(number);
	}

	/**
	* Validate the data is email or not
	* @param {Object} data
	* @type boolean
	*/
	this.isEMailAddr = function(string){
		emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/
		return emailRegExp.test(string);
	}

	/**
	* Validate the data is zip code or not
	* @param {Object} data
	* @parsm {String} country
	* @type boolean
	*/
	this.isZipCode = function(zipcode,country){
		if(!zipcode) return false;
		if(!country) format = 'US';
		switch(country){
			case'US': zpcRegExp = /^\d{5}$|^\d{5}-\d{4}$/; break;
			case'MA': zpcRegExp = /^\d{5}$/; break;
			case'CA': zpcRegExp = /^[A-Z]\d[A-Z] \d[A-Z]\d$/; break;
			case'DU': zpcRegExp = /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/; break;
			case'FR': zpcRegExp = /^\d{5}$/; break;
			case'Monaco':zpcRegExp = /^(MC-)\d{5}$/; break;
		}
		return zpcRegExp.test(zipcode);
	}

	/**
	* Validate the data is date or not
	* @param {Object} data
	* @parsm {String} format
	* @type boolean
	*/
	this.isDate = function(date,format){
		if(!date) return false;
		if(!format) format = 'FR';
		
		switch(format){
			case'FR': RegExpformat = /^(([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/([2][0]|[1][9])\d{2})$/; break;
			case'US': RegExpformat = /^([2][0]|[1][9])\d{2}\-([0]\d|[1][0-2])\-([0-2]\d|[3][0-1])$/; break;
			case'SHORTFR': RegExpformat = /^([0-2]\d|[3][0-1])\/([0]\d|[1][0-2])\/\d{2}$/; break;
			case'SHORTUS': RegExpformat = /^\d{2}\-([0]\d|[1][0-2])\-([0-2]\d|[3][0-1])$/; break;
			case'dd MMM yyyy':RegExpformat = /^([0-2]\d|[3][0-1])\s(Jan(vier)?|Fév(rier)?|Mars|Avr(il)?|Mai|Juin|Juil(let)?|Aout|Sep(tembre)?|Oct(obre)?|Nov(ember)?|Dec(embre)?)\s([2][0]|[1][19])\d{2}$/; break;
			case'MMM dd, yyyy':RegExpformat = /^(J(anuary|u(ne|ly))|February|Ma(rch|y)|A(pril|ugust)|(((Sept|Nov|Dec)em)|Octo)ber)\s([0-2]\d|[3][0-1])\,\s([2][0]|[1][9])\d{2}$/; break;
		}
		
		return RegExpformat.test(date);
	}

	/**
	* Validate the data is date time or not
	* @param {Object} data
	* @type boolean
	*/
	this.isDateTime = function(date){
		//TODO: validate the number of year and month
		var regex = /^(\d{4})\-(\d{2})\-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;
		return regex.test(date);
	}

	/**
	* Validate the data is duration type or not
	* @param {Object} data
	* @type boolean
	*/
	this.isDuration = function(n){
		var regex = /^[-]?P(?!$)(?:\d+Y)?(?:\d+M)?(?:\d+D)?(?:T(?!$)(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?)?$/
		return regex.test(n);
	}

	/**
	* Validate the data is restrict duration type or not
	* @param {Object} data
	* @type boolean
	*/
	this.isRestrictDuration = function(n){
		var regex = /^[-]?PT(?!$)(?:\d+H)?(?:\d+M)?(?:\d+(?:\.\d+)?S)?$/;
		return regex.test(n);
	}

	/**
	* Validate the data is unsigned long or not
	* @param {Object} data
	* @type boolean
	*/
	this.isUnsignedLong = function(num){
		var maxValue = "18446744073709551615";
		var maxLength = maxValue.length;
		var r = true;

		if(!this.isNonNegativeInteger(num)){
			r = false;
		}else{
			if(num.length > maxLength){
				r = false;
			}else{
				if(num.length == maxLength
					&& (num.charAt(maxLength-1)>5)){
					r = false;
				}
			}
		}

		return r;
	}

	/**
	* Validate the data is printable string or not
	* @param {Object} data
	* @param {int} min
	* @param {int} max
	* @type boolean
	*/
	this.isPrintableString = function(_s , _min , _max){
		if(_s.length < _min || _s.length > _max){
			return false;
		}
		for (var i = 0; i < _s.length; i++) {
			var ch = _s.charCodeAt(i);
			if(((ch < 32 && ch != 10 && ch != 13 && ch !=9 ) || ch > 126)){
				return false;
			}
		}
		return true;
	}

	/**
	* Validate the data is MD5 or not
	* @param {Object} data
	* @type boolean
	*/
	this.isMD5 = function(string){
		if(!string) return false;
		md5RegExp = /^[a-f0-9]{32}$/;
		return md5RegExp.test(string);
	}

	/**
	* Validate the data is URL or not
	* @param {Object} data
	* @type boolean
	*/
	this.isURL = function(string){
		if(!string) return false;
		string = string.toLowerCase();
		urlRegExp = /^\s*(((ht|f)tp(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?\s*$/
		//urlRegExp = /^(((file|gopher|news|nntp|telnet|http|ftp|https|ftps|sftp)\://)|(www\.))+(([a-zA-Z0-9\._-]+\.[a-zA-Z]{2,6})|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(/[a-zA-Z0-9\&%_\./-~-]*)?/ 
		return urlRegExp.test(string);
	}

	/**
	* Validate the data is guid or not
	* guid format : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx or xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
	* @param {Object} data
	* @type boolean
	*/
	this.isGuid = function(guid){
		if(!guid) return false;
		GuidRegExp = /^[{|\(]?[0-9a-fA-F]{8}[-]?([0-9a-fA-F]{4}[-]?){3}[0-9a-fA-F]{12}[\)|}]?$/
		return GuidRegExp.test(guid);
	}

	/**
	* Validate the data is ISBN or not
	* @param {Object} data
	* @parsm {String} format
	* @type boolean
	*/
	this.isISBN = function(number){
		if(!number) return false;
		ISBNRegExp = /ISBN\x20(?=.{13}$)\d{1,5}([- ])\d{1,7}\1\d{1,6}\1(\d|X)$/
		return ISBNRegExp.test(number);
	}

	/**
	* Validate the data is SSN or not
	* Social Security Number format : NNN-NN-NNNN
	* @param {Object} data
	* @type boolean
	*/
	this.isSSN = function(number){
		if(!number) return false;
		ssnRegExp = /^\d{3}-\d{2}-\d{4}$/
		return ssnRegExp.test(number);
	}

	/**
	* Validate the data is decimal or not
	* @param {Object} data
	* @type boolean
	*/
	this.isDecimal = function(number){
		if(!number) return false;
		decimalRegExp = /^-?(0|[1-9]{1}\d{0,})(\.(\d{1}\d{0,}))?$/
		return decimalRegExp.test(number);
	}

	/**
	* Validate the data is HEX or not
	* @param {Object} data
	* @type boolean
	*/
	this.isHex = function(date){
		var regex =/^([0-9a-fA-F])*$/;
		return regex.test(date);
	}
}