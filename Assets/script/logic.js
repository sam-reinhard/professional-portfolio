$(".project").on("click", function(e){
    e.preventDefault();
    var id = $(this).attr("data-id");
    $("#" + id).show();
});