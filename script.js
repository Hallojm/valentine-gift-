function openGift() {
    let giftBox = document.querySelector(".gift-box");
    giftBox.classList.add("open");

    setTimeout(() => {
        document.getElementById("backgroundMusic").play();
    }, 500);
}
