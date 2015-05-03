/**
* This class support a common way to manage the cookie.
* @constructor
*/
function JSCookie(){

	/**
	* Set cookie
	* @param {String} name
	* @param {String} value
	* @param {String} expires
	* @param {String} path
	* @param {String} domain
	* @param {String} secure
	* @type void
	*/			
	this.setCookie = function( name, value, expires, path, domain, secure ) {
		// set time, it's in milliseconds
		var today = new Date();
		today.setTime( today.getTime() );
	 
		if ( expires ){
			expires = expires * 1000 * 60 * 60 * 24;
		}
		
		var expires_date = new Date( today.getTime() + (expires) );
		document.cookie = name + "=" +escape( value ) +
		( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
		( ( path ) ? ";path=" + path : "" ) + 
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
	 },


	/**
	* Get cookie by its name
	* @param {String} name
	* @type String
	*/
	this.getCookie = function( name ) {
		var start = document.cookie.indexOf( name + "=" );
		var len = start + name.length + 1;
		if ( ( !start ) &&	( name != document.cookie.substring( 0, name.length ) ) ){
			return null;
		}
		if ( start == -1 ) return null;
		var end = document.cookie.indexOf( ";", len );
		if ( end == -1 ) end = document.cookie.length;
		return unescape( document.cookie.substring( len, end ) );
	},


	/**
	* Delete cookie
	* @param {String} name
	* @param {String} path
	* @param {String} domain
	* @type void
	*/
	this.deleteCookie = function( name, path, domain ) {
		if ( get_cookie( name ) ) 
			document.cookie = name + "=" +
				( ( path ) ? ";path=" + path : "") +
				( ( domain ) ? ";domain=" + domain : "" ) +
				";expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}


	/**
	* Delete all of the cookies
	* @type void
	*/
	this.deleteAllCookies = function(){
		var allcookies = document.cookie.split(";");
		for (var i = 0; i < allcookies.length; i++){
			set_cookie(allcookies[i].split("=")[0],'','','/','','');
		}
	 }
}
