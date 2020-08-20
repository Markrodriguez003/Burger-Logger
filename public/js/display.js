$(document).ready(() => {

    // GLOBAL VARIABLE
    let foodieSubmission; // User's submitted food item


    $(".main-wishlist-col-section").hide(); // Hides wishlist and devoured columns


    $(".submitBtn").on("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        $(".main-wishlist-col-section").show();

        foodieSubmission = $(".foodie-text-area").val();
        console.log("USER SUBMITTED:::" + foodieSubmission);
        $(".foodie-text-area").val("");
    })
})