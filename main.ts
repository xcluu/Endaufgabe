namespace pokimon {

    window.addEventListener("load", main);

    function main(): void {
        let p: Pokimon = new Pokimon("Seemops");
        p.hatch();
        p.clean();
        p.change_mood();
    }
}