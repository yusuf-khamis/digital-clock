function updateDigit(element, digit) {
    let topBar = element.querySelector('.top-bar');
    topBar.classList.remove('on', 'off');

    let rightTopBar = element.querySelector('.right-top-bar');
    rightTopBar.classList.remove('on', 'off');

    let leftTopBar = element.querySelector('.left-top-bar');
    leftTopBar.classList.remove('on', 'off');

    let middleTopBar = element.querySelector('.middle-top-bar');
    middleTopBar.classList.remove('on', 'off');

    let middleBottomBar = element.querySelector('.middle-bottom-bar');
    middleBottomBar.classList.remove('on', 'off');

    let rightBottomBar = element.querySelector('.right-bottom-bar');
    rightBottomBar.classList.remove('on', 'off');

    let leftBottomBar = element.querySelector('.left-bottom-bar');
    leftBottomBar.classList.remove('on', 'off');

    let bottomBar = element.querySelector('.bottom-bar');
    bottomBar.classList.remove('on', 'off');

    switch(digit) {
        case 0:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('off');
            middleBottomBar.classList.add('off');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('on');
            bottomBar.classList.add('on');

            break;

        case 1:
            topBar.classList.add('off');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('off');
            middleTopBar.classList.add('off');
            middleBottomBar.classList.add('off');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('off');

            break;

        case 2:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('off');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('off');
            leftBottomBar.classList.add('on');
            bottomBar.classList.add('on');

            break;

        case 3:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('off');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('on');

            break;

        case 4:
            topBar.classList.add('off');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('off');

            break;

        case 5:
            topBar.classList.add('on');
            rightTopBar.classList.add('off');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('on');

            break;

        case 6:
            topBar.classList.add('on');
            rightTopBar.classList.add('off');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('on');
            bottomBar.classList.add('on');

            break;

        case 7:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('off');
            middleTopBar.classList.add('off');
            middleBottomBar.classList.add('off');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('off');

            break;

        case 8:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('on');
            bottomBar.classList.add('on');

            break;

        case 9:
            topBar.classList.add('on');
            rightTopBar.classList.add('on');
            leftTopBar.classList.add('on');
            middleTopBar.classList.add('on');
            middleBottomBar.classList.add('on');
            rightBottomBar.classList.add('on');
            leftBottomBar.classList.add('off');
            bottomBar.classList.add('on');

            break;
    }
}

function updateTime() {
    let current = new Date();

    updateDigit(document.getElementById('hours1'), Math.floor(current.getHours() / 10));
    updateDigit(document.getElementById('hours2'), current.getHours() % 10);

    updateDigit(document.getElementById('minutes1'), Math.floor(current.getMinutes() / 10));
    updateDigit(document.getElementById('minutes2'), current.getMinutes() % 10);

    updateDigit(document.getElementById('seconds1'), Math.floor(current.getSeconds() / 10));
    updateDigit(document.getElementById('seconds2'), current.getSeconds() % 10);
}

updateTime();

let current = new Date();
let difference = 1000 - current.getMilliseconds();

setTimeout(function() {
    setInterval(updateTime, 1000);

    setInterval(function(){
        let current = new Date();

        document.body.querySelectorAll('.dots > div').forEach(function(dot) {
            if (current.getMilliseconds() < 500) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }, 500);

    updateTime();

}, difference);