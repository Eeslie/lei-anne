// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const jigglypuffPopup = document.getElementById("jigglypuff-popup");
const jigglypuffGif = document.getElementById("jigglypuff-gif");

// Track if popup has been shown
let popupShown = false;

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic when NO btn is clicked
noBtn.addEventListener("click", () => {
    // Hide the NO button
    noBtn.style.display = "none";
    
    // Show the jigglypuff popup only once
    if (!popupShown) {
        // Reload the GIF to restart animation
        const gifSrc = jigglypuffGif.src;
        jigglypuffGif.src = '';
        jigglypuffGif.src = gifSrc + '?t=' + new Date().getTime();
        
        jigglypuffPopup.style.display = "flex";
        popupShown = true;
        
        // Hide popup after GIF plays once (estimate 3 seconds for typical GIF loop)
        setTimeout(() => {
            jigglypuffPopup.style.display = "none";
        }, 3000);
    }
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "./cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
