menu_list_array = ["Veg Margherita Pizza", "Tandoori paneer pizza", "Veggie Supreme pizza", "Veg Kabab Surprise"];

var data = [];

function getmenu() {
    var htmldata;


    for (i = 0; i < menu_list_array.length; i++) {
        data.push(menu_list_array[i] + "<br>")
    };

    data = data.join(" ")
    document.getElementById("display_menu").innerHTML = data;

}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;


    menu_list_array.sort();
    htmldata = "<section class='cards'>"

    for (var j = 0; j < menu_list_array.length; j++) {
        htmldata = htmldata + '<div class="card">' + "<img src='images/pizzaImg.png'> " + menu_list_array[j] + "</div>"
    }

    document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top() {
    var item = document.getElementById("add_item").value;

    menu_list_array.push(item);
    add_item()

}