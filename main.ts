namespace pokimon {
    export let crc: CanvasRenderingContext2D;
    export let staticImg: ImageData;
    export let bgImg: ImageData
    let img: HTMLImageElement;


    window.addEventListener("load", main);

    function main(): void {
        let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("canvas");
        crc = canvas.getContext("2d");



        let gradient = crc.createLinearGradient(0, 0, 0, 1000);
        gradient.addColorStop(0, "#f1feff");
        gradient.addColorStop(0.5, "#e6f1ff");
        gradient.addColorStop(1, "#e0ffe3");
        crc.fillStyle = gradient;
        crc.fillRect(0, 0, 1000, 1000);

        bgImg = crc.getImageData(0, 0, 1000, 1000);


        let p: Pokimon = new Pokimon("Flegmon");
        p.hatch();
        p.changeVisual();

        let petBtn: HTMLButtonElement = document.getElementById("button-pet") as HTMLButtonElement;
        petBtn.addEventListener('click', p.pet);
        let cleanBtn: HTMLButtonElement = document.getElementById("button-clean") as HTMLButtonElement;
        cleanBtn.addEventListener('click', p.clean);

    }

    export function showHearts(): void {
        staticImg = crc.getImageData(0, 0, 1000, 1000);

        console.log("test");

        img = new Image();
        img.src = "img/hearts.png";
        crc.drawImage(img, 450, 10, 200, 200);

        window.setTimeout(
            function () {
                crc.clearRect(0, 0, 1000, 1000);
                crc.putImageData(staticImg, 0, 0);
            }, 1500);

    }
}