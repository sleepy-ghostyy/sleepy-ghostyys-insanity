const button2 = document.getElementById("openTab2");
const button3 = document.getElementById("openTab3");
const button4 = document.getElementById("openTab4");

const panel2 = document.getElementById("screen2");
const panel3 = document.getElementById("screen3");
const panel4 = document.getElementById("screen4");

button2.onclick = function () {

    panel2.classList.toggle("open");
};

button3.onclick = function () {

    panel3.classList.toggle("open");
};

button4.onclick = function () {

    panel4.classList.toggle("open");
};




const player = document.getElementById("songplay");
const playpause = document.getElementById("pause");
const songtitle = document.getElementById("songtitle");
const songs = [

    {

        title: "1. The Dove - Baby Bugs",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/The%20Dove%20-%20Baby%20Bugs.mp4"
    },
    {
        title: "2. Otomodachi - Phantom Siita",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Otomodachi%20-%20Phantom%20Siita.mp4"
    },
    {
        title: "3. AiAiA - Ado",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/AiAiA%20-%20Ado.mp4"
    },
    {
        title: "4. Rubio's Lament - Waitress",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Rubio's%20Lament%20-%20Waitress.mp4"
    },
    {
        title: "5. Pulsar Star - Anya Nami",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Pulsar%20Star%20-%20Anya%20Nami.mp4"
    },
    {
        title: "6. Bernadette - IAMX",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Bernadette%20-%20IAMX.mp4"
    },
    {
        title: "7. ANOTHER CUP ft. Kasane Teto - bunnycat",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/ANOTHER%20CUP%20ft%20Kasane%20Teto%20-%20bunnycat.mp4"
    },
    {
        title: "8. Rivers Is a Vampire - Bear Ghost",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Rivers%20Is%20a%20Vampire%20-%20Bear%20Ghost.mp4"
    },
    {
        title: "9. DON'T WANNA SLEEP - måneskin",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/DONT%20WANNA%20SLEEP%20-%20maneskin.mp4"
    },
    {
        title: "10. Himitsu Keisatsu ft. Hatsune Miku - buriru",
        src: "https://file.garden/ai-Z25dvjAtOj2Jx/Himitsu%20Keisatsu%20ft%20Hatsune%20Miku%20-%20buriru.mp4"
    },

];

let currentSong = 0;

function playSong(index) {

    currentSong = index;

    player.src = songs[currentSong].src;

    songtitle.textContent = songs[currentSong].title;

    player.play();

    playpause.textContent = "❚❚";
}

playpause.onclick = function () {

    if (player.src === "") {

        playSong(currentSong);

        return;
    }

    if (player.paused) {

        player.play();

    } else {

        player.pause();

    }

};

const buttons = document.querySelectorAll(".song");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const index = Number(button.dataset.index);

        playSong(index);

    });

});

document.getElementById("next").onclick = function () {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);

};

document.getElementById("prev").onclick = function () {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    playSong(currentSong);

};

player.addEventListener("ended", () => {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    playSong(currentSong);

});