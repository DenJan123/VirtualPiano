document.addEventListener("keydown", function (e) {
    if (e.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        let audio = new Audio("data/A.mp3")
        audio.play();
    } else if (e.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        let audio = new Audio("data/S.mp3");
        audio.play();
    } else if (e.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        let audio = new Audio("data/D.mp3");
        audio.play();
    } else if (e.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        let audio = new Audio("data/F.mp3");
        audio.play();
    } else if (e.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        let audio = new Audio("data/A.mp3");
        audio.play();
    } else if (e.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = new Audio("data/A.mp3");
        audio.play()
    } else if (e.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audio = new Audio("data/J.mp3");
        audio.play()
    }
})
