//check off specific todos by clicking 
$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});


//click on x to delete
$("ul").on("click", "span",function(e){
	$(this).parent().fadeOut(600,function(){
		$(this).remove();
	});
	e.stopPropagation();
});

//click on plus button to add todo
$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		//grabbing new todo text
		var todoText = $(this).val();
		//empty the input after clicking enter
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText +"</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(500);
});