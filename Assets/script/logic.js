$(".project").on("click", function(e){
    e.preventDefault();
    var id = $(this).attr("data-id");
    $("#" + id).show();

    // Closing the modal options

    // $(window).on("click", function(e){
    //     e.preventDefault();
    //     console.log("clicked on the window");

    //     if (e.target == id) {
    //         $("#" + id).hide();
    //     }    
    // });

    $(".close").on("click", function(e){
        e.preventDefault();
        $("#" + id).hide();
    });
});