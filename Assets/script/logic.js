$(document).ready(function(){
    $(".project").on("click", function(e){
        e.preventDefault();
        var id = $(this).attr("data-id");
        $("#" + id).css("z-index", 1).show();

        // Closing the modal options

        // $(window).on("click", function(event){
        //     event.preventDefault();
        //     console.log("clicked on the window");
        //     console.log(event.target);
        //     $(".modal").css("z-index", -1).hide();
    
        // });

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