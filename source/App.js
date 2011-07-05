/* Copyright 2009-2011 Hewlett-Packard Development Company, L.P. All rights reserved. */
enyo.kind({
	name: "Main",
	kind: enyo.VFlexBox,
	flex: 1, 
	components: [
		{kind: "PageHeader", content:"Sample_Enyo_Project"},
		{content: "If you can read this then the app is working!"}
	]
});
