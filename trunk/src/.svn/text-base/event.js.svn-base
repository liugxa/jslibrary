/**
* This class support a common way to add/remove the event on the elements
* @constructor
*/
 function JSEvent(){
 	/**
 	 * Attach event on the elements
 	 * @param {Object} elements HTML elements which will be attached the event
	 * @param {Function} function the event function
	 * @type void
 	 */
 	this.addEvents = function(_elementNames , _function){
 		for (var i = 0; i < _elementNames.length; i++) {
 			var elements = document.getElementsByTagName(_elementNames[i]);
 			for (var k = 0; k < elements.length; k++) {
 				if (document.all) {
 					if (elements[k].type == 'checkbox' || elements[k].type == 'radio') {
 						elements[k].attachEvent("onclick", _function);//IE4.0
 					}
 					else if (elements[k].tagName && elements[k].tagName.toLowerCase() == 'select') {
 						elements[k].attachEvent("onchange", _function);//IE4.0
 					}
 					else {
 						elements[k].attachEvent("onkeyup", _function);//IE4.0
 					}
 				}
 				else {
 					if (elements[k].type == 'checkbox' || elements[k].type == 'radio') {
 						elements[k].addEventListener("click", _function, false);
 					}
 					else if (elements[k].tagName && elements[k].tagName.toLowerCase() == 'select') {
 						elements[k].addEventListener("change", _function, false);
 					}
 					else {
 						elements[k].addEventListener("keyup", _function, false);
 					}
 				}
 			}
 		}
 	}
 	
 	/**
 	 * Remove the event from the elements
 	 * @param {Object} elements the elements which will be removed the event
	 * @param {Function} function the remove function
	 * @type void
 	 */
 	this.removeEvents = function(_elementNames , _function){
 		for (var i = 0; i < _elementNames.length; i++) {
 			var elements = document.getElementsByTagName(_elementNames[i]);
 			for (var k = 0; k < elements.length; k++) {
 				if (document.all) {
 					if (elements[k].type == 'checkbox' || elements[k].type == 'radio') {
 						elements[k].detachEvent("onclick", _function);//IE4.0
 					}
 					else if (elements[k].tagName && elements[k].tagName.toLowerCase() == 'select') {
 						elements[k].detachEvent("onchange", _function);//IE4.0
 					}
 					else {
 						elements[k].detachEvent("onkeyup", _function);//IE4.0
 					}
 				}
 				else {
 					if (elements[k].type == 'checkbox' || elements[k].type == 'radio') {
 						elements[k].removeEventListener("click", _function, false);
 					}
 					else if (elements[k].tagName && elements[k].tagName.toLowerCase() == 'select') {
 						elements[k].removeEventListener("change", _function, false);
 					}
 					else {
 						elements[k].removeEventListener("keyup", _function, false);
 					}
 				}
 			}
 		}
 	}
 }
