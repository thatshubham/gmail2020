//copyright Shubham Bose
const mail = "https://mail.google.com/mail/u/";
const half = "/h/1pq68r75kzvdr/?v%3Dlui";
//var url = url;


//var num = parseInt("https://mail.google.com/mail/u/".match(/\d+/),10);

chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        var res = details.url.split('/')[5];
//        console.log("this step was reached");
        return {
            redirectUrl:
              mail + res + half
          };
},
  
    {
      urls: [
        "*://mail.google.com/*",
        "*://gmail.com/*"
      ],
      types: [
        "main_frame",
        "sub_frame",
//        "stylesheet",
        "script",
        "image",
        "object",
        "xmlhttprequest",
        "other"
      ]
    },
    ["blocking"]
  );