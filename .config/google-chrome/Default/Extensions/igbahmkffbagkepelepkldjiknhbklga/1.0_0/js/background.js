var cssCiewerContextMenusParent  = null;

chrome.browserAction.onClicked.addListener(function(tab) {
	if( tab.url.indexOf("https://chrome.google.com") == 0 || tab.url.indexOf("chrome://") == 0 ) {
		alert(chrome.i18n.getMessage("extWarning"));
		return;
	}
	chrome.tabs.executeScript(tab.id, {file:'js/enable-copy.js'});
	chrome.tabs.insertCSS(tab.id, {file:'css/enable-copy.css'});
});