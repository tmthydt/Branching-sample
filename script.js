"use strict";

document.querySelector("form").addEventListener("submit",
displayCatName);

function displayCatName(event) {
    event.preventDefault();
    let catname = document.querySelector("#catname").value;
    document.body.append(catname);
}