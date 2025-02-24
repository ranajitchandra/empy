console.clear();

// Event Bubble__________________________________________

    // const body = document.getElementById("body")
    // body.addEventListener("click", function(e){
    // // console.log(e.target)
    // console.log("body")
    // })
    // const section = document.getElementById("sec")
    // section.addEventListener("click", function(e){
    //     // console.log(e.target)
    //     console.log("Section")
    // })
    // const ol = document.getElementById("list-item")
    // ol.addEventListener("click", function(e){
    //     // console.log(e.target)
    //     console.log("ol")
    // })



    // const getLi = document.getElementById("item-3")    
    // getLi.addEventListener("click", function(e){
    //     // console.log(e.target)
    //     console.log("Li")
    //     // e.stopPropagation() // it is stop for this section, not work upper parent bubbling. and it is work this section related another function.
    //     e.stopImmediatePropagation() //it is stop for this section, not work upper parent bubbling. and it is (not) work this section related another function. it is work only for this function
    // })    
    // getLi.addEventListener("click", function(e){
    //     // console.log(e.target)
    //     console.log("Li---2")
    // })    
    // getLi.addEventListener("click", function(e){
    //     // console.log(e.target)
    //     console.log("Li----3")
    // })    





// Event Delegate_________________________________________

// const list = document.querySelectorAll(".list")
const lists = document.querySelector("#list-item")

lists.addEventListener("click", function(e){
    // console.log(e.target.parentNode)
    // console.log(e.target.childNodes)
    console.log(e.target.tagName)
    if(e.target.tagName == "LI"){
        e.target.parentNode.removeChild(e.target)
    }
})


const btn = document.querySelector("#add")

btn.addEventListener("click", function(e){
    
    // console.log(document.createElement("li").innerText="HI");

    const olParentList = document.getElementById("list-item");

    const inputText = document.getElementById("input-txt");
    
    const createEl = document.createElement("li");
    createEl.classList.add("list");
    createEl.innerText=inputText.value.toUpperCase();
    olParentList.appendChild(createEl);
    inputText.value = "";

})







