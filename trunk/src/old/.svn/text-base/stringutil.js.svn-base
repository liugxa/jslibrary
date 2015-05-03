function isStringTooLong(str)
{
    if (str.length > 59)
        return true;
    
    return false;
}

function isValidString(str) 
{
  
    
    for (var i = 0; i < str.length; i++)
    {
        var ch = str.charCodeAt(i);
	if(!isValidChar(ch))
	   return false;
    }
    
    if (isCharHyphen(str.charCodeAt(0)))
        return false;
    
    return true;

}

function isValidChar(ch)
{
   if((ch >= 48 && ch <= 57) || ( ch >= 65 && ch <= 90) ||(ch >= 97 && ch <= 122) || ch == 45 || ch == 95)
     return true;
   else
     return false;
}

function isCharHyphen(ch)
{
   if(ch == 45)
     return true;
   else
     return false;
}

function isCharPeriod(ch)
{
   if(ch == 46)
     return true;
   else
     return false;
}


function isAlphaNumber(name)
{
   for ( var j=0; j < name.length; j++) 
   {
       var cc = name.charCodeAt(j);
       // 0-9 is 48-57      
       var cond = (cc >= "48" &&  cc <= "57" ) || (cc >= "65" &&  cc <= "90" ) || (cc >= "97" &&  cc <= "122" )
       if(!cond)
       {
             return false;
       }
   }    
   
   return true;
}

function isFloatNumber(num)
{
    if (num.indexOf(".") >= 0)
        return true;
    
    return false;
}

function isPositiveIntegerInRange(num, minNumber, maxNumber)
{
    
    if (isNaN(num,10))
	return false;
    if (num.indexOf(".") >= 0)
        return false;
    if (num.indexOf("-") >= 0)
        return false;
    if ( parseInt(num, 10) < minNumber )
	return false;
    if ( parseInt(num, 10) > maxNumber )
	return false;
    
    return true;
}


function isNumber(num)
{
   for ( var j=0; j < num.length; j++) 
   {
       var cc = num.charCodeAt(j);
       // 0-9 is 48-57      
       var cond = (cc >= "48" &&  cc <= "57" ) 
       if(!cond)
       {
             return false;
       }
   }    
   
   return true;
}

function trim(s)
{
  // Remove leading spaces and carriage returns

  while ((s.substring(0,1) == ' ') || (s.substring(0,1) == '\n') || (s.substring(0,1) == '\r') || (s.substring(0,1) == '\t'))
  {
    s = s.substring(1,s.length);
  }

  // Remove trailing spaces and carriage returns
  var chCode = s.charCodeAt(s.length-1);
  while (chCode==13 || chCode==10 || chCode==9 || chCode==32)//' ' '\n' '\r' '\t' 
  {
    s = s.substring(0,s.length-1);
    chCode = s.charCodeAt(s.length-1);
  }
  return s;
}

function isPrintableChar(printableString){
    for (var i = 0; i < printableString.length; i++) {
        var ch = printableString.charCodeAt(i);
        if(((ch < 32 && ch != 10 && ch != 13) || ch > 126)){
            return false;
        }
    }
    return true;
}

function iskAlphaNumericSpace(str){
	for ( var j=0; j < str.length; j++) 
   {
       var cc = str.charCodeAt(j);
       // 0-9 is 48-57    
       var cond = (cc >= "48" &&  cc <= "57" ) || (cc >= "65" &&  cc <= "90" ) || (cc >= "97" &&  cc <= "122")||(cc == "32")
       if(!cond)
       {
             return false;
       }
   }     
   return true;
}

function iskAlphaNumericSpaceDot(str){
    for ( var j=0; j < str.length; j++) 
   {
       var cc = str.charCodeAt(j);
       // 0-9 is 48-57    
       var cond = (cc >= "48" &&  cc <= "57" ) || (cc >= "65" &&  cc <= "90" ) || (cc >= "97" &&  cc <= "122")||(cc == "32")||(cc == "46" && j!=0)
       if(!cond)
       {
             return false;
       }
   }     
   return true;
}

/**
 * Rounding 4 ->5
 * @param {Object} num number
 * @param {Object} n decimal digits
 */
function  setScale(num,n)  
{
	var sizeFloat = parseFloat(num);
	if(!isNaN(sizeFloat)){
		var  dd=1;  
		var  tempnum;  
		for(i=0;i<n;i++)  
		{  
			dd*=10;  	
		}  
		tempnum=num*dd;  
		tempnum=Math.round(tempnum);  
		return tempnum/dd;
	}else{
		return num;
	}
}
