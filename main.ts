namespace pokimon {

    export let crc: CanvasRenderingContext2D;

    window.addEventListener("load", main);

    function main(): void {
        let p: Pokimon = new Pokimon("Seemops");
        p.hatch();
        p.changeVisual();

        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
        crc = canvas.getContext("2d");

        let gradient = crc.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 1000, 1000);


    }
}