
var video = document.getElementById("myVideo");
var btn = document.getElementsById("Play");
function myFunction() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
function fun()
{
    document.querySelector("#finish").style.opacity="50%";
}
function Switch()
{
    //document.querySelector(".WIN").style.opacity="0%";
    //document.querySelector(".WIN").style.zIndex="-5";
    //document.querySelector(".WIN").style.transition="2s";
    var element = document.getElementById("WIN");
    element.classList.toggle("WIN2");
}

function Chat()
{
    let number = document.getElementById("wright").value;
    if(number==2525)
    {
        alert("Du har bestilt tid til konserten", );
    }
    else
    {
        alert("Coden er ikke riktig, prøv igjen eller kjøp bileten")
    }

}
