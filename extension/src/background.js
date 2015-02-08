/* 
	function navigate
	- navigates current tab to Yelp with search terms
	- used by omnibox
 */

function navigate(inputString) {
	if(inputString=="") {
		// If empty, then go to Yelp
		chrome.tabs.create({"url" : "https://www.yelp.com", "active" : true});
	} else {
		var inputURI = encodeURIComponent(inputString);	
		chrome.tabs.getSelected( undefined, function(tab) {
			chrome.tabs.update(tab.id, {url: "https://www.yelp.com/search?find_desc="+inputURI+"&src=opensearch"}, undefined);
		}); 
	}
}


// Reacting to users entering "yp" in the omnibox
chrome.omnibox.onInputEntered.addListener(navigate);
chrome.omnibox.setDefaultSuggestion({"description" : "Search Yelp for '%s'"});
