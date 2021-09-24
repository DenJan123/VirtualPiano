function makeSoundObject(keyText){
    return new Audio(`data/${keyText.toUpperCase()}.mp3`);
}

document.addEventListener("keydown", function (e) {
    const sound = makeSoundObject(e.key);
    sound.play();
})

document.addEventListener("click", function (e){
    console.log(e.target);
    const sound = makeSoundObject(e.target.innerText);
    sound.play();
})
