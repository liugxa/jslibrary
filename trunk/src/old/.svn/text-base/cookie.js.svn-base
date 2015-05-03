// This function set cookie
// name			-- cookie name
// value		-- cookie value
// expire		-- cookie life time,unit:day. if no  time is set for expire, 
//					it will only last as long as the current session of the visitor, 
//					and will be automatically deleted when they close their browser
// path			-- cookie path
// domain
// security			
function set_cookie( name, value, expires, path, domain, secure ) 
{
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );

	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	
	var expires_date = new Date( today.getTime() + (expires) );

	document.cookie = name + "=" +escape( value ) +
	( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + 
	( ( path ) ? ";path=" + path : "" ) + 
	( ( domain ) ? ";domain=" + domain : "" ) +
	( ( secure ) ? ";secure" : "" );
}



function setCookieLoginDate(_date){
	set_cookie("platform.logindate",_date,'', '/', '', '' );
}

// this function gets the cookie, if it exists
function get_cookie( name ) {
	
	var start = document.cookie.indexOf( name + "=" );
	var len = start + name.length + 1;
	if ( ( !start ) &&	( name != document.cookie.substring( 0, name.length ) ) )
	{
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}




// this deletes the cookie when called
function delete_cookie( name, path, domain ) {

	if ( get_cookie( name ) ) 
		document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

// add one open windows number and reset it to cookie
function incrementWindowCount(name){
	var openWindows = 0;
	if (get_cookie(name))
	{
		openWindows = get_cookie(name);
	}
	openWindows ++;

	set_cookie(name,openWindows,'', '/', '', '' );

}

// reduce one open windows number and reset it to cookie
function decreaseWindowCount(name){
	var openWindows = 1;
	if (get_cookie(name))
	{
		openWindows = get_cookie(name);
	}
	openWindows --;

	set_cookie(name,openWindows,'', '/', '', '' );

}
function deleteAllCookies(){
	var allcookies = document.cookie.split(";");
	for (var i = 0; i < allcookies.length; i++){
		set_cookie(allcookies[i].split("=")[0],'','','/','','');
	}
}
