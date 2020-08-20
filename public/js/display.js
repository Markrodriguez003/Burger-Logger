$(document).ready(() => {

    // GLOBAL VARIABLE
    let foodieSubmission; // User's submitted food item
    let icon; // User food icon code


    $(".main-wishlist-col-section").hide(); // Hides wishlist and devoured columns

    // GRABS ICON FROM ICON DROPDOWN
    $(".foodie-icon-dropdown a").on("click", (e) => {
        // e.stopPropagation();
        // e.preventDefault();
        icon = e.target.text;
    })

    // WHEN USER CLICKS ON SUBMISSION BUTTON PASS FOODIE ITEM AND ICON TO WISHLIST
    $(".submitBtn").on("click", (e) => {
        e.stopPropagation();
        e.preventDefault();

        $(".main-wishlist-col-section").show(); // Unhides wishlist columns

        foodieSubmission = $(".foodie-text-area").val(); // Grabs value from foodie item submission text-area
        addFoodieItem(foodieSubmission, icon);

        $(".foodie-text-area").val(""); // Clears foodie item text-area
        icon = ""; // Clears icon
    })


    $(document).on("click", ".devour-btn", (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log($(e.target).parent()[0].firstChild.nodeValue);
        let devouredFoodieItem = $(e.target).parent()[0].firstChild.nodeValue;
        addDevouredItem(devouredFoodieItem);

        $(e.target).parent().remove();

    })
})

// ADDS NEW FOODIE ITEM SUBMITTED BY USER
function addFoodieItem(foodie, emoji) {
    if (!emoji) {emoji = "&#127869"; }

    $(`.foodie-lister`)
        .append(`<li class="list-group-item float-left foodie-item"> ${emoji} ${foodie}
        <button type="submit" class="btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn">Devour me!</button></li>`)
    $('.devour-btn')
        .addClass(`btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn`) // Creates a new item in foodie wishlist item (left col) 
}

function addDevouredItem(devouredItem) {
    $(`.devoured-lister`)
        .append(`<li class="list-group-item float-right"> ${devouredItem}
        <button type="submit" class="btn btn-large btn-warning text-white row-sm ml-4 float-right undo-btn">Undo!</button></li>`)
    $('.undo-btn')
        .addClass(`btn btn-large btn-secondary text-white row-sm ml-4 float-left undo-btn`) // Creates a new item in foodie wishlist item (left col) 
}