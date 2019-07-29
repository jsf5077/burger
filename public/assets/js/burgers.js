$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("devoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("burger is eaten");
                location.reload();
            }
        )
    });

    $(".create-form").on("sumbit", function(event) {
        event.preventDefault();

        var newBurger = {name: $("#bg").val().trim()};

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("New Burger Available");
                location.reload();
            }
        )
    });
});