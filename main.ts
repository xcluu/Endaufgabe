namespace pokimon {

    window.addEventListener("load", main);

    function main(): void {
        let p: Pokimon = new Pokimon("Seemops");
        p.hatch();
        p.clean();
        p.update_mood();

        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        let crc: canvasRenderingContext2D = canvas.getContext("2d");

        gradient = crc.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#cdcce3");
        gradient.addColorStop(0.5, "#cdbcc2");
        gradient.addColorStop(1, "#d49ea0");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 800, 500);
    }
}