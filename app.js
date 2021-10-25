var pages=["Home" , "About" , "Interact"];

function createNav(){
    var nav =document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);
    function createButton(pg){
        var butt = document.createElement("button");
        butt.innerHTML=pg;

        butt.addEventListener("click" , function(){
            navigate(pg);
        })
        nav.appendChild(butt);
    }
}

function createWrapper(){
    var wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg==="Home") {
        homePage()
    }else if(pg==="About") {
        aboutPage()
    } else if(pg==="Interact"){
        interactPage()
        }
}

var startnum = 0
var start = document.body.querySelector(".start");

function add1 (add){
    if(addone === "Increase Counter") {
        startnum = startnum + 1
        start.innerHTML = "Counter: " + startnum
    }
}

function homePage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="About";
    wrapper.appendChild(header);
    var text = document.createElement("h3");
    text.innerHTML="Sydnee";
    wrapper.appendChild(text);
}

function interactPage(){
    var wrapper=document.body.querySelector(".wrapper");
    wrapper.innerHTML="";
    var header = document.createElement("h1");
    header.innerHTML="Interact";
    wrapper.appendChild(header);
    document.body.querySelector(".button").addEventListener("click" ,function(){
    addone = "Increase Counter";
    add1 (1);
    })
}


createNav();
createWrapper();
navigate("Home");