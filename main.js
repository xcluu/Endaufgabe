var pokimon;
(function (pokimon) {
    window.addEventListener("load", main);
    function main() {
        var p = new pokimon.Pokimon("Seemops");
        p.hatch();
        p.clean();
        p.change_mood();
    }
})(pokimon || (pokimon = {}));
//# sourceMappingURL=main.js.map