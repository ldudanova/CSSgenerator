// Ranges
const RED_RANGE = document.getElementById('red-color-range');
const GREEN_RANGE = document.getElementById('green-color-range');
const BLUE_RANGE = document.getElementById('blue-color-range');
const OPACITY_RANGE = document.getElementById('opacity-color-range');

//Inputs
const RED_INPUT = document.getElementById('red-color');
const GREEN_INPUT = document.getElementById('green-color');
const BLUE_INPUT = document.getElementById('blue-color');
const OPACITY_INPUT = document.getElementById('opacity-color');

//Demos
const RGBA_COLOR_DEMO = document.getElementById('rgba-demo');
const RGB_COLOR_DEMO = document.getElementById('rgb-demo');

//Code areas
const RGBA_AREA = document.getElementById('rgba-code-area');
const RGB_AREA = document.getElementById('rgb-code-area');
const HEX_AREA = document.getElementById('hex-code-area');

//Copy btns
const RGBA_COPY_BTN = document.getElementById('rgba-copy-btn');
const RGB_COPY_BTN = document.getElementById('rgb-copy-btn');
const HEX_COPY_BTN = document.getElementById('hex-copy-btn');

RED_INPUT.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,RED_RANGE));
GREEN_INPUT.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,GREEN_RANGE));
BLUE_INPUT.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,BLUE_RANGE));
OPACITY_INPUT.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,OPACITY_RANGE));

RED_RANGE.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,RED_INPUT));
GREEN_RANGE.addEventListener('input', (event) => generateColorOrOpacityAndChangeInputOrRange(event, GREEN_INPUT));
BLUE_RANGE.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,BLUE_INPUT));
OPACITY_RANGE.addEventListener('input', (event)=>generateColorOrOpacityAndChangeInputOrRange(event,OPACITY_INPUT));

RGBA_COPY_BTN.addEventListener('click', ()=>toCopyCode(RGBA_AREA));
RGB_COPY_BTN.addEventListener('click', ()=>toCopyCode(RGB_AREA));
HEX_COPY_BTN.addEventListener('click', ()=>toCopyCode(HEX_AREA));


function generateColorOrOpacityAndChangeInputOrRange(event, to) {
    to.value = event.target.value ;
    generateDemoColor();
}

function generateDemoColor() {
    RGB_COLOR_DEMO.style.background = 'rgb(' + RED_INPUT.value + ', '+  GREEN_INPUT.value +', '+ BLUE_INPUT.value+')';
    RGBA_COLOR_DEMO.style.background = 'rgba(' + RED_INPUT.value + ', ' + GREEN_INPUT.value + ', ' + BLUE_INPUT.value + ', ' + OPACITY_INPUT.value + ')';
    showColorCode();
}

function showColorCode () {
    RGBA_AREA.innerText = 'rgba(' + RED_INPUT.value + ', ' + GREEN_INPUT.value + ', ' + BLUE_INPUT.value + ', ' + OPACITY_INPUT.value + ')';
    RGB_AREA.innerText = 'rgb(' + RED_INPUT.value + ', '+  GREEN_INPUT.value +', '+ BLUE_INPUT.value+')';
    HEX_AREA.innerText = rgbtoHex(RED_INPUT.value, GREEN_INPUT.value, BLUE_INPUT.value);
}

function rgbtoHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(colorComponent) {
    let hex = parseInt(colorComponent).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


