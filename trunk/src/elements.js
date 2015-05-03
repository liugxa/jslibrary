/**
* This class support a common way to add/remove the event on the elements
* @constructor
*/
function JSElement(){
	var _this. = this;

	/**
	* To create a tr element
	* @type Object
	*/
	this.createTr = function(){
		return this.createElement("tr");
	}

	/**
	* To create a td element
	* @type Object
	*/
	this.createTd = function(){
		return td = this.createElement("td");
	}

	/**
	* To create a tr element which contain some of the tds
	* @param {Object} tr the tr element
	* @param {int} length how many tds shoule be created
	* @type Object
	*/
	this.createTds = function(_tr , _tdLength){
		var tds = new Array();
		for(var i=0;i<_tdLength;i++){
			tds[i] = this.createElement("td");
			_tr.appendChild(tds[i]);	
		}                                                     
		return tds;
	}

	/**
	* Remove the trs
	* @param {Object} tbody which contain the trs
	* @type void
	*/
	this.removeTrs = function(_tbody){
		var trs = _tbody.getElementsByTagName("tr");
		
		for(var i=0;i<trs.length;i++){
			_tbody.removeChild(trs[i]);
		}
	}

	/**
	* To create a radio element
	* @param {String} name the radio's name
	* @param {String} value the radio's value
	* @type Object
	*/
	this.createRadio = function(_radioName , _radioValue){
		var radio = this.createElement("input");
		radio.type = "radio";
		radio.name = _radioName;
		radio.value = _radioValue;
		return radio;		
	}

	/**
	* To create a checkbox element
	* @param {String} name the checkbox's name
	* @param {boolean} ischeck whether the checkbox is checked or not
	* @type Object
	*/
	this.createCheckbox = function(_checkboxName , _isChecked){
		var checkbox = this.createElement("input");
		checkbox.name = _checkboxName;
		checkbox.type = "checkbox";
		checkbox.value = "false";
		if(_isChecked != null){
			if(_isChecked == true || _isChecked == "true"){
				checkbox.checked = true;
				checkbox.value = "true";
			}
		}
		return checkbox;
	}
		
	/**
	* To create a label element
	* @param {String} name the label's name
	* @param {String} value the label's value
	* @type Object
	*/
	this.createLabel = function(_labelName , _labelValue){
		var label = this.createElement("label");
		label.name = _labelName;
		label.appendChild(this.createTextNode(_labelValue));	
		return label;				
	}

	/**
	* To create a input element
	* @param {String} name the input's name
	* @param {String} value the input's value
	* @type Object
	*/
	this.createInput = function(_inputName , _inputValue){
		return _createInput(_inputName , _inputValue , "block");
	}


	/**
	* To create a select element
	* @param {String} name the select's name
	* @param {List} options the option list
	* @param {String} value the select's value
	* @type Object
	*/
	this.createSelect = function(_selectName , _options , _selectValue){
		return _createSelect(_selectName , _options , _selectValue , "block");
	}

	/**
	* To create a HTML element
	* @param {String} name the element's name
	* @type Object
	* @deprecated this method will be change to private
	*/
	this.createElement = function(name){
		return document.createElement(name);
	}

	/**
	* To create a text node element
	* @param {String} name the text node's name
	* @type Object
	* @deprecated this method will be changed into private
	*/
	this.createTextNode = function(name){
		return document.createTextNode(name);
	}

	//private methods
	//==================================================================

	/**
	* Create the input element
	* @param {String} name
	* @param {String} value
	* @param {String} style
	* @type Object
	* @private
	*/
	function _createInput(_inputName , _inputValue , _inputStyle){
		var input = _this.createElement("input");
		input.name = _inputName;
		input.style.display = _inputStyle;
		
		input.size = "10";
		input.className = "inputTextField";
		input.value = _inputValue;
		return input;
	}

	/**
	* Create the select element
	* @param {String} name
	* @param {String} options
	* @param {String} value
	* @param {String} style
	* @type Object
	* @private
	*/
	function _createSelect(_selectName , _options , _selectValue , _selectStyle){
		var select= _this.createElement("select");
		select.name = _selectName;
		select.style.display = _selectStyle;
		
		for(var i=0;i<_options.length;i++){
			var optionElement = _this.createElement("option");
			optionElement.value = _options[i];
			if(optionElement.value == _selectValue) optionElement.selected = true;
			
			optionElement.appendChild(_this.createTextNode(_options[i]));
			select.appendChild(optionElement);
		}
		return select;
	}
}