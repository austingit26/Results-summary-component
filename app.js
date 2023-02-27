"use strict"

fetch("data.json")
.then (response => response.json()).then(data=>{
    const container = document.querySelector(".output");
    let display = "";
    for (let info of data){
        display += `
        <div class="col-12 mb-3 rounded-3 ${info.category} p-3">
            <img src= '${info.icon}' alt="${info.category} logo" class="img">
              <span class="title w-25">${info.category}</span>
              <span class="value">${info.score}<span class="total"> / 100</span></span>
        </div>`
    }
    
    display += 
        `<a  href="index.html">
            <button class="p-3 w-100 text-white rounded-pill my-3">
                Continue
            </button>
        </a>`
    container.innerHTML = display;    
});