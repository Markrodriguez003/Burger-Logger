$(document).ready(() => {

    // GLOBAL VARIABLE
    let foodieSubmission; // User's submitted food item
    let icon; // User food icon code

    // $(".main-wishlist-col-section").hide(); // Hides wishlist and devoured columns
   // LOADS PRIOR FOODIE ITEMS TO WISHLIST FROM DB
   loadFoodieItems();
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
        if (!icon) { icon = "&#127869"; }
        addFoodieItem(foodieSubmission, icon);

        // New foodie object to be inserted to ajax POST request below
        let newFoodItem = {
            name: foodieSubmission,
            icon: icon,
            devoured: 0
        };
        console.log("NEW FOODIE ITEM:::" + JSON.stringify(newFoodItem));

        // Sends request to create and insert new foodie item via ajax POST
        $.ajax("/api/foodie", {
            type: "POST",
            data: newFoodItem
        }).then(
            () => {
                console.log("Created and inserted new foodie item to db::: " + newFoodItem);
                // Reload the page to get the updated list
                // location.reload();
                $(".foodie-text-area").val(""); // Clears foodie item text-area
                icon = ""; // Clears icon
            }
        );
    });
})


$(document).on("click", ".devour-btn", (e) => {
    e.stopPropagation();
    e.preventDefault();

    let id = $(this).data("id");
    console.log($(e.target).parent()[0].firstChild.nodeValue);
    let devouredFoodieItem = $(e.target).parent()[0].firstChild.nodeValue;
    addDevouredItem(devouredFoodieItem);

    $(e.target).parent().remove();

    // UPDATES FOODIE ITEM TO DEVOURED STATE
    // let devouredState = {
    //     devoured: 1
    // }

    // // 
    // $.ajax("/api/foodie" + id, {
    //     type: "PUT",
    //     data: devouredState
    // }).then(
    //      () => {
    //         console.log("Foodie has been Devoured");
    //     }
    // );
});


// -----------------------------------------------------------------------------
// FUNCTIONS
// ADDS NEW FOODIE ITEM SUBMITTED BY USER
function addFoodieItem(foodie, emoji) {
    if (!emoji) { emoji = "&#127869"; }

    $(`.foodie-lister`)
        .append(`<li class="list-group-item float-left foodie-item"> ${emoji} ${foodie}
        <button type="submit" class="btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn">Devour me!</button></li>`)
    $('.devour-btn')
        .addClass(`btn btn-large btn-warning text-white row-sm ml-4 float-right devour-btn`) // Creates a new item in foodie wishlist item (left col) 
}

// MOVES FOODIE ITEM FROM WISHLIST TO DEVOURED LIST
function addDevouredItem(devouredItem) {
    $(`.devoured-lister`)
        .append(`<li class="list-group-item float-right"> ${devouredItem}
        <button type="submit" class="btn btn-large btn-warning text-white row-sm ml-4 float-right undo-btn">Undo!</button></li>`)
    $('.undo-btn')
        .addClass(`btn btn-large btn-secondary text-white row-sm ml-4 float-left undo-btn`) // Creates a new item in foodie wishlist item (left col) 
}

// LOADS FOODIE ITENM FROM SERVER TO WISHLIST COLUMNS WHEN PAGE LOADS
function loadFoodieItems() {

    $.ajax("/api/foodie/all", {
        method: "GET",

    }).then(
        (foodieItems) => {
            console.log("FOODIE ITEMS TAKEN FROM DB::: " + JSON.stringify(foodieItems));
            console.log("HOW MANY FOODIE ITEMS::: " + foodieItems.length);
            console.log("FIRST FOODIE ITEM --> " + foodieItems[0].foodie_name + " " + foodieItems[0].foodie_icon)


            for (let i = 0; i < foodieItems.length; i++) {
                console.log("We are at index: " + i);
                console.log("Inserting:: " + foodieItems[i].foodie_name + " " + foodieItems[i].foodie_icon)
                addFoodieItem(foodieItems[i].foodie_name, foodieItems[i].foodie_icon) // call function
            }

            // foodieItems.forEach((f,i), ()=>{
            //     console.log("Inserting to wishlist " + f[i].foodie_name + " " + f[i].foodie_icon +"!");  
            //     addFoodieItem(f[i].foodie_name, f[i].foodie_icon) // call function
            // })
        });
}
