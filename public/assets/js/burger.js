// when you click on devout it
$(document).on("click", ".devourIt", function () {
    // make put request to change devoured to true
    $.ajax("/devoured/" + $(this).data("id"), {
        type: "PUT",
        data: {
            devoured: true
        }
    }).then(function (err, res) {
        // reload page to update view with current data
        location.reload();
    });
});

// when you click on add a burger
$(document).on("click", "#addABurger", function (event) {
    event.preventDefault();
    // if burger_name is empty
    if ($("#burger_name").val().trim().length === 0){
        return alert("You must give your burger a name");
    };
    $.post("/newBurger", {burger_name: $("#burger_name").val().trim()}
    ).then(function (err, res) {
        location.reload();
    });
});