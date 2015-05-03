/**
* JSException object.
* @class This class support a common way to catch and deal with(print the error message
*	into the page) the exception by javascript.
* @constructor
*/
function JSException(){
	/**
	* Catch excetpion.
	* If it is a Error which is same as the concept the RuntimeException 
	* in java, throw it. Otherwise display it on the page.
	* @param {Object} _handle
	* @param {Object} _e
	* @type void
	*/
	this.catchException = function(_handle , _e){
		if (_e instanceof Error) {
			//this is the javascript exception , ignore it!
			alertMessage(_e.message);
		}else{
			appendException(_handle , _e.message);
		}
	}


	/**
	* Display the error message on the page.
	* @param {Object} _handle
	* @param {Object} _errorMsg
	* @type voiod
	*/
	this.appendException = function(_handle , _errorMsg){
		if(_handle != null){
			_handle.innerHTML = "";
			_handle.style.display = "none";

			_handle.innerHTML = _errorMsg;
			_handle.style.display = "";
		}else{
			alertMessage(_errorMsg);
		}
	}
}

