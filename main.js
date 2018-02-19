var pokimon;
(function (pokimon) {
    pokimon.canvas = document.getElementsByTagName("canvas")[0];
    pokimon.crc = pokimon.canvas.getContext("2d");
    window.addEventListener("load", main);
    function main() {
        var p = new pokimon.Pokimon("Seemops");
        p.changeVisual();
        var gradient = pokimon.crc.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        pokimon.crc.fillStyle = gradient;
        pokimon.crc.fillRect(0, 0, 800, 500);
    }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map