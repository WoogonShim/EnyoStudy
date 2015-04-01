/**
	For simple applications, you might define all of your views in this file.
	For more complex applications, you might choose to separate these kind definitions
	into multiple files under this folder.
*/

enyo.kind({
	name: "flickr.SearchPanel",
	kind: "moon.Panel",
	title: "Search Flickr",
	titleBelow: "Enter search term above",
	headerOptions: {inputMode: true, dismissOnEnter: true},
	handlers: {
		onInputHeaderChange: "search"
	},
	search: function(inSender, inEvent) {
		alert(inEvent.originator.get("value"));
	},
});

enyo.kind({
	name: "flickr.MainView",
	classes: "moon enyo-fit",
	kind: "enyo.Control",
	components: [
		{kind: "moon.Panels", classes: "enyo-fit", pattern: "alwaysviewing",
			popOnBack: true, components: [
			{kind: "flickr.SearchPanel"}
		]}
	]
});
