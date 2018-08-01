chrome.runtime.onMessage.addListener(function(req, sender, sendResponse) {
	if( req.message === "clicked_browser_action") {
		var firstHref = $("a[href^='http']").eq(0).attr("href");
		chrome.runtime.sendMessage({ "message" : "open_new_tab", "url" : firstHref });
	}
});