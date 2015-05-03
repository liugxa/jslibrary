
function createTr(_id){
	var tr = _createElement("tr");
	tr.id = _id;
	return tr;
}

function createTd(){
	return _createElement("td");
}

//HTML element's function
function createRadio(_radioName , _radioValue){
	var radio = _createElement("input");
	radio.type = "radio";
	radio.name = _radioName;
	radio.value = _radioValue;
	return radio;		
}

function createCheckbox(_checkboxName , _checkboxValue , _isChecked){
	var checkbox = _createElement("input");
	checkbox.name = _checkboxName;
	checkbox.type = "checkbox";
	checkbox.value = _checkboxValue;
	checkbox.checked = _isChecked;
	return checkbox;
}
	
function createLabel(_labelName , _labelValue){
	var label = _createElement("label");
	label.name = _labelName;
	label.appendChild(_createTextNode(_labelValue));	
	return label;				
}

function createHidden(_inputName , _inputValue , _inputId){
	var input = _createElement("input");
	input.name = _inputName;
	input.id = _inputId;
	
	input.style.display = "none";
	input.value = _inputValue;
	return input;	
}

function createInput(_inputName , _inputValue , _inputId , _inputStyle){
	var input = _createElement("input");
	input.name = _inputName;
	input.id = _inputId;
	
	input.size = "8";
	input.className = _inputStyle;
	input.value = _inputValue;
	return input;
}

	
function createSelect(_selectName , _selectValue , _options){
	var select= _createElement("select");
	select.name = _selectName;
	select.style.cssText= "width:100px;";
	
	for(var i=0;i<_options.length;i++){
		var option = _options[i];
		var optionElement = _createElement("option");
		
		var strs = option.split(":");
		optionElement.value = strs[0];
		
		if(optionElement.value == _selectValue) optionElement.selected = true;
		optionElement.appendChild(_createTextNode(strs[1]));
		
		select.appendChild(optionElement);
	}
	return select;
}


function _createElement(name){
	return document.createElement(name);
}

function _createTextNode(name){
	return document.createTextNode(name);
}

//common functions
function createTds(_tr , _tdLength){
	var tds = new Array();
	for(var i=0;i<_tdLength;i++){
		tds[i] = _createElement("td");
		_tr.appendChild(tds[i]);	
	}
	return tds;
}
	
function removeTrs(_tbody){
	var delTrs = new Array();
	var trs = _tbody.getElementsByTagName("tr");
	
	for (var i=0; i < trs.length; i++) {	
		var inputs = trs[i].getElementsByTagName("input");
		for (var t = 0; t < inputs.length; t++) {
			if(inputs[t].name == ""){	
				if (inputs[t].type == "checkbox" && inputs[t].checked) {	
					delTrs.push(trs[i]);
				}
			}
		}
	}
	
	for(var i=0;i<delTrs.length;i++){
		_tbody.removeChild(delTrs[i]);
	}
}

function getRemoveTrs(_tbody){
	var delTrs = new Array();
	var trs = _tbody.getElementsByTagName("tr");
	
	for (var i=0; i < trs.length; i++) {	
		var inputs = trs[i].getElementsByTagName("input");
		for (var t = 0; t < inputs.length; t++) {
			if(inputs[t].name == ""){	
				if (inputs[t].type == "checkbox" && inputs[t].checked) {	
					delTrs.push(trs[i]);
				}
			}
		}
	}
	return delTrs;		
}