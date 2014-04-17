	$(document).ready(function() {
	//assigning the click event to the buttom
	$('#addButton').click(function(){

		var listItem = $('#listItem');
		$('#shoppingList ul').append('<li>' + listItem.val() + "   <span class='close'> X </span>   " + '</li>');
		listItem.val('').focus();

	});


	$('#shoppingList').on("click", "li:contains(X)", function () { 
    $(this).remove();
});


});