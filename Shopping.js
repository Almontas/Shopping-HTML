$(document).ready(function() {
	//assigning the click event to the buttom
	$('#addButton').click(function(){

		var listItem = $('#listItem');
		$('form[name=listForm]').append('<input type="hidden" name="hiddenList[]" value="' + listItem.val() + '" />');
		$('#shoppingList').append('<br/>' + input.val());
		input.val('').focus();


	});

});