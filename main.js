function makeSoundObject(event){
    return new Audio(`data/${event.key.toUpperCase()}.mp3`);
}

document.addEventListener("keydown", function (e) {
    const sound = makeSoundObject(e);
    sound.play();
})
