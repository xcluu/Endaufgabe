var pokimon;
(function (pokimon) {
    window.addEventListener("load", main);
    function main() {
        var p = new pokimon.Pokimon("Seemops");
        p.hatch();
        p.clean();
        p.update_mood();
        var canvas = document.getElementsByTagName("canvas")[0];
        var crc = canvas.getContext("2d");
        gradient = crc.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#cdcce3");
        gradient.addColorStop(0.5, "#cdbcc2");
        gradient.addColorStop(1, "#d49ea0");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 800, 500);
    }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map