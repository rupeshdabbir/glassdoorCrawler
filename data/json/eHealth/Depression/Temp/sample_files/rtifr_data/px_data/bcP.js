
(function(){var B=document,C=function(c){return encodeURIComponent(c).replace(/[!'()~]/g,escape).replace(/\*/g,"%2A");},V=function(){return new Date().getTime();},G=(function(){var s=!1;try{var p=B.location.protocol;s=p&&p=="https:";}catch(e){}
return s;})(),H=G?"https://":"http://",a="";if(typeof(rfiCustomParams)==="object"){for(var k in rfiCustomParams){a+="&"+C(k)+"="+C(rfiCustomParams[k]);}}
B.writeln("<ifr"+"ame src=\""+H+"p.rfihub.com/ca.html"+"?rb="+rfiPub.publisher+"&ca="+rfiPub.conversionID+"&ra="+(V()%1000000000)+""+Math.floor(Math.random()*10000)+a+"\""+" border=0 frameborder=0 vspace=0 hspace=0 scrolling='no' marginheight='0'"+" marginwidth='0' style='display:none;padding:0;margin:0' width='0'"+" height='0'></iframe>");})();