window.addEventListener("load" , () => { // After the content has loaded the code in the function will run
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div"); // This take all the div pads which will be stored in the variable pads
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#1dace4"
    ];

    pads.forEach((pad, index) => { // This loops over each pad
        pad.addEventListener("click" , function(){
            sounds[index].currentTime = 0; // This allows the user to press the sound where it'll play as soon as the pad is clicked
            sounds[index].play() // This plays the individual sounds according to their index
            createBubbles(index)

        });
    });

    // Create a function that creates bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        // The index on line 14 is passed down to line 18, then line 24, then line 27
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        })
    };
});