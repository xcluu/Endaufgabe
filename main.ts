namespace pokimon {
    export let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    export let crc: CanvasRenderingContext2D = canvas.getContext("2d");

    window.addEventListener("load", main);

    function main(): void {
        let p: Pokimon = new Pokimon("Seemops");
        p.changeVisual();




        let gradient = crc.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 800, 500);


    }
}