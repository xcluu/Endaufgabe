var pokimon;
(function (pokimon) {
    var img;
    img = new Image();
    img.src = "img/hearts.png";
    var h;
    var p;
    var f = [];
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
        h = new pokimon.Handler();
        p = h.choose_pokimon("Flegmon");
        f = h.create_food();
        p.hatch();
        p.changeVisual();
        var petBtn = document.getElementById("button-pet");
        petBtn.addEventListener('click', p.pet.bind(p));
        var cleanBtn = document.getElementById("button-clean");
        cleanBtn.addEventListener('click', p.clean.bind(p));
        var feedBtn = document.getElementById("button-feed");
        feedBtn.addEventListener('click', feed);
        var gooutBtn = document.getElementById("button-go-out");
        gooutBtn.addEventListener('click', go_out);
        update();
    }
    function feed() {
        var carrotImg = document.getElementById("karotte");
        var pizzaImg = document.getElementById("pizza");
        var omnomImg = document.getElementById("omnombeere");
        if (carrotImg.style.display == "block")
            p.feed(f['karotte']);
        if (pizzaImg.style.display == "block")
            p.feed(f['pizza']);
        if (omnomImg.style.display == "block")
            p.feed(f['omnombeere']);
        update();
    }
    function go_out() {
        var carrots = 1 + Math.random() * 3;
        carrots = Math.round(carrots);
        var pizza = Math.random();
        pizza = Math.round(pizza);
        var omnomberries = 1 + Math.random() * 3;
        omnomberries = Math.round(omnomberries);
        f['karotte'].anzahl += carrots;
        f['pizza'].anzahl += pizza;
        f['omnombeere'].anzahl += omnomberries;
        alert("Oh! Während dem Spazierengehen hast du folgendes auf der Straße gefunden: \n" + "Karotten: " + carrots + "\nPizza: " + pizza + "\nOmnombeeren: " + omnomberries);
        update();
    }
    function showHearts() {
        pokimon.staticImg = pokimon.crc.getImageData(0, 0, 1000, 1000);
        pokimon.crc.drawImage(img, 450, 10, 200, 200);
        window.setTimeout(function () {
            pokimon.crc.clearRect(0, 0, 1000, 1000);
            pokimon.crc.putImageData(pokimon.staticImg, 0, 0);
            p.changeVisual();
        }, 1500);
    }
    pokimon.showHearts = showHearts;
    function update() {
        var captionP = document.getElementById("captionP");
        var captionO = document.getElementById("captionO");
        var captionC = document.getElementById("captionC");
        captionP.innerHTML = f['pizza'].anzahl;
        captionO.innerHTML = f['omnombeere'].anzahl;
        captionC.innerHTML = f['karotte'].anzahl;
    }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map