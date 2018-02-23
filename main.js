var pokimon;
(function (pokimon) {
    var img;
    img = new Image();
    img.src = "img/hearts.png";
    var h;
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
    }
    function feed() {
        var carrotImg = document.getElementById("karotte");
        var pizzaImg = document.getElementById("pizza");
        var omnomImg = document.getElementById("omnombeere");
        if (carrotImg.style.display == "block")
            h.pokimon.feed(h.food['karotte']);
        if (pizzaImg.style.display == "block")
            h.pokimon.feed(h.food['pizza']);
        if (omnomImg.style.display == "block")
            h.pokimon.feed(h.food['omnombeere']);
        update();
    }
    pokimon.feed = feed;
    function go_out() {
        console.log("go out");
        var carrots = 1 + Math.random() * 3;
        carrots = Math.round(carrots);
        var pizza = Math.random();
        pizza = Math.round(pizza);
        var omnomberries = 1 + Math.random() * 3;
        omnomberries = Math.round(omnomberries);
        h.food['karotte'].anzahl += carrots;
        h.food['pizza'].anzahl += pizza;
        h.food['omnombeere'].anzahl += omnomberries;
        alert("Oh! Während dem Spazierengehen hast du folgendes auf der Straße gefunden: \n" + "Karotten: " + carrots + "\nPizza: " + pizza + "\nOmnombeeren: " + omnomberries);
        update();
    }
    pokimon.go_out = go_out;
    function showHearts() {
        pokimon.staticImg = pokimon.crc.getImageData(0, 0, 1000, 1000);
        pokimon.crc.drawImage(img, 450, 10, 200, 200);
        window.setTimeout(function () {
            pokimon.crc.clearRect(0, 0, 1000, 1000);
            pokimon.crc.putImageData(pokimon.staticImg, 0, 0);
            h.pokimon.update_img();
        }, 1500);
    }
    pokimon.showHearts = showHearts;
    function toggleVisibility() {
        var postChoose = document.getElementById("post-all");
        var preChoose = document.getElementById("pre-all");
        preChoose.style.display = "none";
        postChoose.style.display = "block";
    }
    pokimon.toggleVisibility = toggleVisibility;
    function update() {
        var captionP = document.getElementById("captionP");
        var captionO = document.getElementById("captionO");
        var captionC = document.getElementById("captionC");
        captionP.innerHTML = h.food['pizza'].anzahl;
        captionO.innerHTML = h.food['omnombeere'].anzahl;
        captionC.innerHTML = h.food['karotte'].anzahl;
        var staminaBar = document.getElementById("stamina-progress");
        var expBar = document.getElementById("exp-progress");
        staminaBar.setAttribute("aria-valuenow", h.pokimon.stamina.toString());
        staminaBar.style.width = h.pokimon.stamina.toString() + "%";
        staminaBar.innerHTML = h.pokimon.stamina.toString();
        expBar.setAttribute("aria-valuemax", h.pokimon.maxExp.toString());
        expBar.setAttribute("aria-valuenow", h.pokimon.exp.toString());
        expBar.style.width = ((h.pokimon.exp / h.pokimon.maxExp) * 100).toString() + "%";
        expBar.innerHTML = h.pokimon.exp.toString() + "/" + h.pokimon.maxExp.toString();
        var lvlDiv = document.getElementById("lvl");
        lvlDiv.innerHTML = "Level " + h.pokimon.lv.toString();
    }
    pokimon.update = update;
    function update2() {
        window.setTimeout(update2, 1500);
        h.pokimon.update_experience();
        h.pokimon.update_stamina();
        update();
        if (h.pokimon.lv > 0) {
            h.pokimon.update_mood();
            h.pokimon.update_img();
        }
    }
    pokimon.update2 = update2;
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map