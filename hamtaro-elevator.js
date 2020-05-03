let floor = 1;
let timeFrames = 130;
let hamtaroElement;
let typeAnimate = 'STOP';
let hamtaroSprite = {
    width: 38,
    height: 42,
    positionX: -9,
    positionY: 0,
    limitX: 640,
    limitY: 1530,
    sizeRow: 24,
}

let positionInScreen = {
    X: 0,
    Y: 0,
    Scale: 4
}

let interval;

let elevator = {
    width: 400,
    height: 300,
}

window.onload = function () {
    setElevator();
    hamtaroElement = document.querySelector(".hamtaro");
    hamtaroAnimated();
}



document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if ((keyName == 'ArrowLeft') && typeAnimate != 'LEFT') {
        typeAnimate = 'LEFT';
    }

    if (keyName == 'ArrowRight' && typeAnimate != 'RIGHT') {
        typeAnimate = 'RIGHT';
    }

    if (event.code == 'Space' && typeAnimate != 'DANCING') {
        typeAnimate = 'DANCING';
    }
});

document.addEventListener('keyup', (event) => {

    typeAnimate = 'STOP';
});

function hamtaroAnimated() {
    interval = setInterval(() => {

        //console.log(hamtaroSprite.positionX)

        if (typeAnimate == 'DANCING') {
            hamtaroSprite.positionY = -1275;
            if (hamtaroSprite.positionX < - 200 || hamtaroSprite.positionX > -9) {
                hamtaroSprite.positionX = -9;
            } else {
                hamtaroSprite.positionX -= hamtaroSprite.width;
            }
        }

        else if (typeAnimate == 'LEFT') {
            hamtaroSprite.positionY = -48;

            if (hamtaroSprite.positionX < -300 || hamtaroSprite.positionX > -235) {
                hamtaroSprite.positionX = -235;
            } else {
                hamtaroSprite.positionX -= hamtaroSprite.width;
            }

            // o bixo andando pra esquerda
            positionInScreen.X -= (hamtaroSprite.width * 0.6);

        }

        else if (typeAnimate == 'RIGHT') {

            hamtaroSprite.positionY = -48;

            if (hamtaroSprite.positionX < -455 || hamtaroSprite.positionX > -380) {
                hamtaroSprite.positionX = -380;
            } else {
                hamtaroSprite.positionX -= hamtaroSprite.width;

                // o bixo andando pra direita
                positionInScreen.X += (hamtaroSprite.width * 0.6);
            }
        }

        else if (typeAnimate == 'STOP') {
            
            hamtaroSprite.positionY = -1415;

            if (hamtaroSprite.positionX < -350 || hamtaroSprite.positionX > -275) {
                hamtaroSprite.positionX = -276;
            } else {
                hamtaroSprite.positionX -= hamtaroSprite.width;
            }
        }
        
        setSpritePositionHamtaro(hamtaroSprite.positionX, hamtaroSprite.positionY, positionInScreen.X, positionInScreen.Y);
        
        document.querySelector('.floor').textContent = parseInt(floor);

        floor += 0.2;

    }, timeFrames);
}

function setSpritePositionHamtaro(x, y, positionX, positionY) {
    hamtaroElement.setAttribute("style", `background-position-x: ${x}px; background-position-y: ${y}px; transform: translateX(${positionX}px) scale(${positionInScreen.Scale}); top: ${positionInScreen.Y}px`);
}

function setElevator(){ 

    let widthDivider = 3.5;
    elevator.width = document.documentElement.clientWidth / widthDivider;
    elevator.height = elevator.width * 0.7;

    positionInScreen.Scale = elevator.width / 160;
    positionInScreen.Y = (elevator.height - ((hamtaroSprite.height * positionInScreen.Scale) + 10));

    let buildWidth = elevator.width * 1.15;
    let elevatorBackgroundWidth = elevator.width / 1;

    document.querySelector('.elevator-background').setAttribute('style', `width: ${elevatorBackgroundWidth}px; margin-left: -${elevatorBackgroundWidth / 2}px`);
    document.querySelector('.floor').setAttribute('style', `top: ${elevator.height / 8.6}px; width:${elevator.width  /3.2}px ; margin-left: -${elevator.width / 6.4}px`);
    document.querySelector('.building').setAttribute('style', `width: ${buildWidth}px; margin-left: -${buildWidth / 2}px`);
    //document.querySelector('.building-background').setAttribute('style', `width: ${elevator.width}px; margin-left: -${elevator.width / 2}px`);
    document.querySelector('.elevator').setAttribute('style', `width: ${elevator.width}px; height: ${elevator.height}px; margin-left: -${elevator.width / 2}px;`)
}