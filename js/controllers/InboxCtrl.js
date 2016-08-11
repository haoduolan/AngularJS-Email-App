angular.module('EmailApp')
.controller('InboxCtrl',
	function InboxCtrl() {
		// Model and View bindings
		'use strict';
		// InboxFactory.getMessages().success(function(data){
		// 	console.log(data);
		// 	debugger;
		// });
		this.title = "Inbox View";
	});