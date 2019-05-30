$(document).ready(function(){
    $(".project").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("data-id");
        $("#" + id).css("z-index", 1).show();

        // Closing the modal options

        $(".close").on("click", function(e){
            e.preventDefault();
            $("#" + id).css("z-index", -1).hide();
        });
    });

    $(".close-btn").on("click", function(e){
        e.preventDefault();
        $(".modal").css("z-index", -1).hide();
    })
});