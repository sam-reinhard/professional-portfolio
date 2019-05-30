$(document).ready(function(){

    // Project Box On-Click
    $(".project").on("click", function(e){
        e.preventDefault();

        // Show the Modal
        var id = $(this).attr("data-id");
        $("#" + id).css("z-index", 1).show();
        $("body").css("overflow", "hidden");

        
        // Close the Modal
        $(".close, .close-btn").on("click", function(e){
            e.preventDefault();
            $("#" + id).css("z-index", -1).hide();
            $("body").css("overflow", "scroll");
        });
    });    
});