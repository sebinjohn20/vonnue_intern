$("button").on("click",function(){
    $(this).closest("li")
    .find("img")
        .clone()
        .addClass("zoom")
        .appendTo("body");
        setTimeout(function(){
        $(".zoom").remove();
        },1000)
   

    
});