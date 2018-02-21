var pokimon;
(function (pokimon) {
    window.addEventListener("load", main);
    function main() {
        var p = new pokimon.Pokimon("Seemops");
        p.hatch();
        p.changeVisual();
        var canvas = document.getElementById("canvas");
        pokimon.crc = canvas.getContext("2d");
        var gradient = pokimon.crc.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        pokimon.crc.fillStyle = gradient;
        pokimon.crc.fillRect(0, 0, 1000, 1000);
    }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map