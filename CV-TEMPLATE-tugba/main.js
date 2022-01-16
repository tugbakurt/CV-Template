function myFunction() {
    var x = document.getElementById("rBar")
    if (x.className === "responsiveBar")
        x.className = "responsiveDegisim";
    else
        x.className = "responsiveBar";
}


function animasyon() {
    let animasyonlar = ["anime1 2s 1", "anime2 2s 1", "anime3 2s 1", "anime4 2s 1", "anime5 2s 1", "anime6 2s 1"];
    let y = document.getElementById("icerik").style.animation = animasyonlar[Math.floor(Math.random() * 6)];//0-5 random
}
function yukleme() {
    setTimeout(function () {
        let x = document.getElementById("navcik");
        let y = document.getElementById("icerik");
        x.style.display = "none";
        y.style.display = "none";
    }, 1000);

}
$(document).ready(function () {
    setTimeout(function () {
        let x = document.getElementById("navcik");
        let y = document.getElementById("icerik");
        x.style.display = "block";
        y.style.display = "block";
        let z = document.getElementById("loadefekt");
        z.style.display = "none";
        animasyon();
    }, 1000);

})
setInterval(() => {
    let x = document.getElementById("unvan");
    if(x.innerText == "Front-End Developer"){
        x.innerText = "Back-End Developer";
        $("#unvan").removeClass("unvan unvan2").addClass("unvan");
    }
    else{
        x.innerText = "Front-End Developer";
        $("#unvan").removeClass("unvan unvan2").addClass("unvan2");
    }
}, 3000);
