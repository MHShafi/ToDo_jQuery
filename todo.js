$("ul").on("click", "li", function(){
    $(this).toggleClass("stroked");
});

$("ul").on("click", "span", function(event){
    $(this).closest("li").fadeOut(300, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
    if(event.which === 13){
        var value = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + value + "</li>");
        $(this).val("");
    }   
});