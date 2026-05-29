// WHAT THE FUCK IS JAVASCRIPT EVEN ABOUT I LITERALLY CODED JUST 19 LINES AND IT GAVE ME +10 ERRORS

let floaty = document.getElementById("ghosty");

window.onscroll = function () {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        floaty.classList.add("show");
    } else {
        floaty.classList.remove("show");
    }
};

floaty.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

const button1 = document.getElementById("openTab1");
const button2 = document.getElementById("openTab2");
const button3 = document.getElementById("openTab3");
const button4 = document.getElementById("openTab4");

const panel1 = document.getElementById("screen1");
const panel2 = document.getElementById("screen2");
const panel3 = document.getElementById("screen3");
const panel4 = document.getElementById("screen4");

const icon1 = document.getElementById("newsicon");
const icon2 = document.getElementById("painticon");
const icon3 = document.getElementById("chaticon");
const icon4 = document.getElementById("musicicon");

button1.onclick = function () {

    panel1.classList.toggle("open");

    if (panel1.classList.contains("open")) {
        icon1.src = "newson.png";
    } else {
        icon1.src = "newsoff.png";
    }
};

button2.onclick = function () {

    panel2.classList.toggle("open");

    if (panel2.classList.contains("open")) {
        icon2.src = "painton.png";
    } else {
        icon2.src = "paintoff.png";
    }
};

button3.onclick = function () {

    panel3.classList.toggle("open");

    if (panel3.classList.contains("open")) {
        icon3.src = "chaton.png";
    } else {
        icon3.src = "chatoff.png";
    }
};

button4.onclick = function () {

    panel4.classList.toggle("open");

    if (panel4.classList.contains("open")) {
        icon4.src = "musicon.png";
    } else {
        icon4.src = "musicoff.png";
    }
};




const player = document.getElementById("songplay");
const playpause = document.getElementById("pause");
const songtitle = document.getElementById("songtitle");
const songs = [

    {

        title: "1. The Dove - Baby Bugs",
        src: "The Dove - Baby Bugs.mp3"
    },
    {
        title: "2. Otomodachi - Phantom Siita",
        src: "Otomodachi - Phantom Siita.mp3"
    },
    {
        title: "3. AiAiA - Ado",
        src: "AiAiA - Ado.mp4"
    },
    {
        title: "4. Rubio's Lament - Waitress",
        src: "Rubio's Lament - Waitress.mp3"
    },
    {
        title: "5. Pulsar Star - Anya Nami",
        src: "Pulsar Star - Anya Nami.mp4"
    },
    {
        title: "6. Bernadette - IAMX",
        src: "Bernadette - IAMX.mp4"
    },
    {
        title: "7. ANOTHER CUP ft. Kasane Teto - bunnycat",
        src: "ANOTHER CUP ft Kasane Teto - bunnycat.mp4"
    },
    {
        title: "8. Rivers Is a Vampire - Bear Ghost",
        src: "Rivers Is a Vampire - Bear Ghost.mp4"
    },
    {
        title: "9. DON'T WANNA SLEEP - måneskin",
        src: "DONT WANNA SLEEP - maneskin.mp4"
    },
    {
        title: "10. Himitsu Keisatsu ft. Hatsune Miku - buriru",
        src: "Himitsu Keisatsu ft Hatsune Miku - buriru.mp4"
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

const canvas = document.getElementById('page');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isPainting = false;
let lineWidth = 1;
let undoStack = [];
let redoStack = [];

function getMousePos(e) {
    const rect = canvas.getBoundingClientRect();

    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}

function saveState() {
    undoStack.push(canvas.toDataURL());

    if (undoStack.length > 50) {
        undoStack.shift();
    }

    redoStack = [];
}

saveState();

function restoreState(dataURL) {
    const img = new Image();

    img.src = dataURL;

    img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
}

restoreState();

const draw = (e) => {
    if (!isPainting) return;

    const pos = getMousePos(e);

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
};

toolbar.addEventListener('click', e => {
    if (e.target.id === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        saveState();
    }

    if (e.target.id === 'undo') {

    if (undoStack.length > 1) {

        const lastState = undoStack.pop();

        redoStack.push(lastState);

        restoreState(undoStack[undoStack.length - 1]);
    }
}

if (e.target.id === 'redo') {

    if (redoStack.length > 0) {

        const restoredState = redoStack.pop();

        undoStack.push(restoredState);

        restoreState(restoredState);
    }
}
});

toolbar.addEventListener('change', e => {
    if (e.target.id === 'stroke') {
        ctx.strokeStyle = e.target.value;
    }

    if (e.target.id === 'linewidth') {
        lineWidth = e.target.value;
    }
});

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;

    const pos = getMousePos(e);

    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
});

canvas.addEventListener('mouseup', () => {
    isPainting = false;
    ctx.beginPath();

    saveState();
});

canvas.addEventListener('mouseleave', () => {
    isPainting = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

function resizeCanvas() {

    const saved = canvas.toDataURL();

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const img = new Image();

    img.src = saved;

    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    };
}

window.addEventListener('resize', resizeCanvas);

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const caption = document.getElementById("caption");

function openImage(img) {

    modal.style.display = "flex";

    modalImg.src = img.src;
    caption.textContent = img.alt;
};

function closeImage() {
    document.getElementById("imgModal").style.display = "none";
};
