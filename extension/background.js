var v = 1.0;

chrome.webRequest.onBeforeRequest.addListener(callback,
  {urls: ["<all_urls>"]},
  ["blocking"]
);

function callback(details){
    var url = details.url;
    var domain = url.match(/^(http|https)\:\/\/([a-zA-Z0-9\.\-])+/g);
    var judge = domain && domain[0].match(/googleapis/g);

    if(judge){
        console.log('googleapis')
         //for useso do not support https...
		 //url = url.replace(/^https/, 'http').replace('googleapis', 'useso')
		 url = url.replace('ajax.googleapis.com', 'cdnjs.cloudflare.com')
         return {redirectUrl: url};
    }else{
            console.log('googleapis')
    }
}
