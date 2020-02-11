self.importScripts('moduleOne.js');



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request);
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    });



chrome.runtime.onInstalled.addListener(() => {
    // only create our menu item once
    chrome.contextMenus.create({
      id: "TestV3",
      title: "V3 Test",
      // show the menu over everything
      contexts: ["all"]
    });
  });



print(chrome);


print('Service worker!')
















function print(val){
    console.log(val);
}