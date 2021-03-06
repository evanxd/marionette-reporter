$(document).ready(require(['button', 'dataController'], function (Button, DataController) {
	'use strict';

	// Variable initialization.
	var dataController = new DataController($("table.tb_header")),
		button = new Button();

	dataController.setButtonType(dataController.detailButton);

	// Initializes the "count" pull-down menu to "10".
	/*
	$("select[name='count']").val(10);
	*/
				
	// Update the test file container and show data to user.
	button.searchToolButtonAction(dataController);

	$("#tab0").addClass('bt_pressed');
	
	dataController.sort('error');

	// Button action binding.
	// Binding feedback actions.
	button.addButtonFeedbackAction($('button, th.tb_header, #title'));
	button.addToggleFeedbackAction($('.tab'));

	// Initializes home page tab to pressed.
	$("#tab0").addClass('bt_pressed');

	// Binding searching action to search tools (pull-down menus).
	/*
	$('select').change(function () {
		button.searchToolButtonAction($(this).attr('name'), $(this).val(), dataController);
	});
	*/
	
	// Binding searching action to search button.
	$('button#bt_search').click(function () {
		button.searchToolButtonAction(dataController);
	});

	// Binding sorting action to the headers of data bars.
	$('th.tb_header').click(function () {
		button.headerButtonAction($(this), dataController);
	});

	// Binding home page action to home page button.
	$('#title').click(function () {
		button.homePageButtonAction(dataController);
	});

	// Binding tab action to tabs to switch between information pages.
	$('p.tab').click(function () {
		button.tabButtonAction($(this), dataController);
	});

	$("option.selfDefine").click(function () {
		button.selfDefineAction($(this));
	});
}));