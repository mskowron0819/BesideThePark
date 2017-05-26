document.addEventListener("DOMContentLoaded", function(event) {
    const Handlebars = require("handlebars");
    const source = document.getElementById("BesideThePark-template").innerHTML;
    const template = Handlebars.compile(source);
    const data = {
        header:{
            searchIcon: "./img/search.png",
            menuIcon  : "./img/menu.png",
            title     : 'Beside the park',
            textTitle : 'Lorem impsum',
            text      : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor                             incididunt ut labore et dolore magna aliqua.',
            iphoneImg : './img/iphone.png'
        }
    };

    document.getElementById("out").innerHTML = template(data);
});