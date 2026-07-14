
// ===============================
// Falling Hearts Animation
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    // Random position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize = 
        Math.random() * 30 + 15 + "px";

    // Random speed
    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";


    document.body.appendChild(heart);


    // Remove after animation

    setTimeout(()=>{

        heart.remove();

    },6000);

}


// Create hearts continuously

setInterval(createHeart,300);




// ===============================
// Music Control
// ===============================


const music = document.getElementById("loveMusic");

const musicBtn = document.getElementById("musicBtn");


if(musicBtn){

    musicBtn.addEventListener("click",()=>{


        if(music.paused){

            music.play();

            musicBtn.innerHTML="⏸ Pause Music";

        }

        else{

            music.pause();

            musicBtn.innerHTML="▶ Play Music";

        }


    });

}



// ===============================
// Auto Play Music
// ===============================


window.addEventListener("load",()=>{

    if(music){

        music.volume = 0.5;

        music.play().catch(()=>{

            console.log(
            "Browser blocked autoplay"
            );

        });

    }

});




// ===============================
// Click Heart Effect
// ===============================


document.addEventListener("click",(e)=>{


    const clickHeart =
    document.createElement("div");


    clickHeart.innerHTML="💖";


    clickHeart.style.position="absolute";

    clickHeart.style.left =
        e.pageX + "px";

    clickHeart.style.top =
        e.pageY + "px";


    clickHeart.style.fontSize="35px";


    clickHeart.style.pointerEvents="none";


    clickHeart.style.animation=
    "clickHeart 1s ease forwards";


    document.body.appendChild(clickHeart);



    setTimeout(()=>{

        clickHeart.remove();

    },1000);



});




// ===============================
// Love Text Animation
// ===============================


const text =
document.querySelector(".love-text");


if(text){


let messages=[

"❤️ I Love You Sona ❤️",

"💖 You Are My Happiness 💖",

"🌹 Forever With You 🌹",

"💕 My Heart Belongs To You 💕"

];


let index=0;


setInterval(()=>{


text.innerHTML =
messages[index];


index++;


if(index>=messages.length){

index=0;

}


},3000);


}



// ===============================
// Add Click Heart CSS Animation
// ===============================


const style =
document.createElement("style");


style.innerHTML=`

@keyframes clickHeart{

0%{

transform:scale(0);

opacity:1;

}


100%{

transform:
translateY(-100px)
scale(1.5);

opacity:0;

}

}

`;


document.head.appendChild(style);