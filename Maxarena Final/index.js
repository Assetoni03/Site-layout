// Header
let numberO= document.querySelectorAll(".nav-link").length

for(let i=0;i<numberO;i++)
{
    document.querySelectorAll(".nav-link")[i].addEventListener("click", function(){
        let lnk;
        ({innerHTML: lnk} = this);
        switch (lnk)
        {
            case "Home":
                document.location.href= "index.html";
                break;
            case "About us":
                document.location.href= "about.html";
                break;
            case "Contacts":
                document.location.href= "contacts.html";
                break;
            case "Donate":
                document.location.href= "donate.html";
                break;
            case "Register":
                document.location.href= "register.html";
                break;
        }

    });

}
// End of Header

//Typewriter animation to main page text
let message = ["MaxArena\n \n \n \n <br\/> Play Anywhere!"];
let pos=0;
let speed=100;
typewriter = () =>{
    document.querySelector(".intro-text").innerHTML=message[0].substring(0,pos)+"<span>\u25ae</span>";
    if(pos++ != message[0].length)
    {
        setTimeout(typewriter, speed);
    }
}
window.addEventListener("load",typewriter);
//end of Typewriter effect


/* begin Scroll Down Button */
const btnScrollTop = document.querySelector(".scroll_down");

btnScrollTop.addEventListener("click", function (){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });

});

function soundTrack() {
    let audio = new Audio();
    audio.src = "tuturu_1.mp3";
    audio.autoplay = true;
}
/* end Scroll Down Button */

