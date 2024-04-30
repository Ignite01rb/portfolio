var typed=new Typed(".text",{
    strings:["Video Editor","Web Devloper","UI/UX designer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
})

let abt=document.querySelector(".about")
let main=document.querySelector("body")
let home=document.querySelector(".home")
let ser=document.querySelector("#services")
let pr=document.querySelector("#portfolio")
let sk=document.querySelector(".imps")
let con=document.querySelector("#contact")
let bar=document.querySelector(".sidebar")


function showhome(){
    abt.style.display="none"
    home.style.display="block"
    ser.style.display="none"
    sk.style.display="none"
    con.style.display="none"
    pr.style.display="none"
}
function about(){
    abt.style.display="block"
    home.style.display="none"
    ser.style.display="none"
    sk.style.display="none"
    con.style.display="none"
    pr.style.display="none"

}
function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('active');
}
function service(){
    ser.style.display="block"
    abt.style.display="none"
    home.style.display="none"
    con.style.display="none"
    sk.style.display="block"
    pr.style.display="none"

}
function portfolio(){
    pr.style.display="block"
    abt.style.display="none"
    home.style.display="none"
    ser.style.display="none"
    sk.style.display="none"
    con.style.display="none"
}

function contact(){
    abt.style.display="none"
    home.style.display="none"
    ser.style.display="none"
    pr.style.display="none"
    sk.style.display="none"
    con.style.display="block"
}
function side(){
    if(bar.style.display==="none"){
        bar.style.display='block'
    }
    else{
        bar.style.display="none"
    }
    
}


