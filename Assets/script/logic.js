$(document).ready(function(){
    $(".project").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("data-id");
        $("#" + id).css("z-index", 1).show();

        // Closing the modal options

        // $(window).on("click", function(e){
        //     e.preventDefault();
        //     console.log("clicked on the window");
        //     console.log(e.target);
    
        // });

        $(".close").on("click", function(e){
            e.preventDefault();
            $("#" + id).css("z-index", -1).hide();
        });
    });
});