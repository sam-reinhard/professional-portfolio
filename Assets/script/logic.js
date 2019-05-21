$(".project").on("click", function(e){
    e.preventDefault();
    console.log("clicking...");
    // select the modal with the same data-id
    var id = this.attr("data-id");
    console.log(id);
    // show that modal
});