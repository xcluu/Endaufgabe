var pokimon;
(function (pokimon) {
    var img;
    window.addEventListener("load", main);
    function main() {
        var canvas = document.getElementById("canvas");
        pokimon.crc = canvas.getContext("2d");
        var gradient = pokimon.crc.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        pokimon.crc.fillStyle = gradient;
        pokimon.crc.fillRect(0, 0, 1000, 1000);
        pokimon.bgImg = pokimon.crc.getImageData(0, 0, 1000, 1000);
        var p = new pokimon.Pokimon("Flegmon");
        p.hatch();
        p.changeVisual();
        var petBtn = document.getElementById("button-pet");
        petBtn.addEventListener('click', p.pet);
        var cleanBtn = document.getElementById("button-clean");
        cleanBtn.addEventListener('click', p.clean);
    }
    function showHearts() {
        pokimon.staticImg = pokimon.crc.getImageData(0, 0, 1000, 1000);
        console.log("test");
        img = new Image();
        img.src = "img/hearts.png";
        pokimon.crc.drawImage(img, 450, 10, 200, 200);
        window.setTimeout(function () {
            pokimon.crc.clearRect(0, 0, 1000, 1000);
            pokimon.crc.putImageData(pokimon.staticImg, 0, 0);
        }, 1500);
    }
    pokimon.showHearts = showHearts;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map