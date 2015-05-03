/**
* JSAjax object.
* @class This class object support the ajax function.
* @constructor
*/
function JSAjax(){
	
	this.responseText = null;
	
	this.responseXML = null;
	
	this.send = function(_url , _xml){
		//new xmlhttp object
		var xmlHttp = XmlHttp.create();
		var date = new Date();
		
		//get the url
		var newUrl = _url + "&date=" + date.getTime();
		if(_url.indexOf("?") == -1) newUrl = _url + "?date=" + date.getTime();
		
		//open the connect and send the xml data
		xmlHttp.open("POST" , newUrl , false);
		xmlHttp.setRequestHeader("context-type","text/xml;charset=utf-8");
		xmlHttp.send(_xml);
		
		this.responseText = xmlHttp.responseText;
		this.responseXML = xmlHttp.responseXML;
	}
	
	this.loadLocalData = function(_xml , _async){
		var xmlDoc = XmlDocument.create();
		xmlDoc.async = _async;
		xmlDoc.load(_xml);
		return xmlDoc;
	}
	

}