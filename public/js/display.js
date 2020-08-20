$(document).ready(() => {

    // GLOBAL VARIABLE
    let foodieSubmission; // User's submitted food item
    let icon; // User food icon code


    $(".main-wishlist-col-section").hide(); // Hides wishlist and devoured columns

    $(".foodie-icon-dropdown .dropdown-item").on("click", (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        
        // console.log($(this).text());
        // This works somewhat
        console.log("ICON CLICK --> " + $(".foodie-icon-dropdown a").attr("data-food"));
        // console.log("ICON CLICK --> " + $(".foodie-icon-dropdown a").attr("data-food"));
        // console.log("ICON CLICK --> " + $(".foodie-icon-dropdown a").prop("selectedIndex", 0).attr("data-food"));
        
        
        // $(".foodie-icon-dropdown a").attr("data-food");
        // icon = $(".foodie-icon-dropdown a ").find(':selected').attr('data-food');
        // icon = $(this).find(':selected').attr('data-food');
        // icon = $(this).attr('data-food');
        // console.log("ICON CLICK --> " + icon);
        // console.log("ICON CLICK --> " + $(this).find(':selected').attr("data-food"));
    })

    $(".submitBtn").on("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        $(".main-wishlist-col-section").show(); // Unhides wishlist columns

        foodieSubmission = $(".foodie-text-area").val(); // Grabs value from foodie item submission text-area
        console.log("USER SUBMITTED:::" + foodieSubmission);
        addFoodieItem(foodieSubmission, icon);

        $(".foodie-text-area").val(""); // Clears foodie item text-area
        icon = ""; // Clears icon
    })


    // FIX IT HAS TO DO WITH GLOBAL WINDOW BECAUSE THIS BUTTON IS CREATED AFTER THE WINDOW LOADS
    $(".devour-btn").on("click", function(e){
        e.stopPropagation();
        e.preventDefault();

        console.log("DEVOUR BTN CLICKED!");
    })
})

// ADDS NEW FOODIE ITEM SUBMITTED BY USER
function addFoodieItem(foodie, emoji) {
    // let foodieEmoji = emoji
    // let foodieEmoji = "&#127828";

    if (!emoji) {
        emoji = "&#127869";
    }


    $(`.foodie-lister`)
        .append(`<li class="list-group-item float-left foodie-item"> ${emoji} &#${foodie}
        <button type="submit" class="btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn">Devour me!</button></li>`)
    $('.devour-btn')
        .addClass(`btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn`) // Creates a new item in foodie wishlist item (left col) 

}

