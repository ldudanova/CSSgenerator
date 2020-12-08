//Text shadow
const DEMO_TEXT = document.getElementById('text-shadow-demo');
const TEXT_SHADOW_HORIZONTAL_POS = document.getElementById('horizontal-position-text-shadow');
const TEXT_SHADOW_VERTICAL_POS = document.getElementById('vertical-position-text-shadow');
const TEXT_SHADOW_BLUR_RADIUS = document.getElementById('blur-radius-text-shadow');
const TEXT_SHADOW_OPACITY = document.getElementById('text-shadow-opacity');
const TEXT_SHADOW_COLOR_PICKER = document.getElementById('text-shadow-color-picker');
const TEXT_SHADOW_COLOR_DISPLAY = document.getElementById('text-shadow-color-display');

TEXT_SHADOW_HORIZONTAL_POS.addEventListener('input', generateTextShadow);
TEXT_SHADOW_VERTICAL_POS.addEventListener('input', generateTextShadow);
TEXT_SHADOW_BLUR_RADIUS.addEventListener('input', generateTextShadow);
TEXT_SHADOW_OPACITY.addEventListener('input', generateTextShadow);
TEXT_SHADOW_COLOR_PICKER.addEventListener('change', generateColorTextShadow);

function showTextShadow() {
    let cssCode = String(DEMO_TEXT.style.textShadow);
    CODE.innerHTML = '-webkit-box-shadow: ' + cssCode + ';' + '<br>' +  '-moz-box-shadow: ' + cssCode + ';' + '<br>' + 'box-shadow: ' + cssCode + ';';
}

function generateTextShadow() {
    DEMO_TEXT.style.textShadow = TEXT_SHADOW_HORIZONTAL_POS.value+'px ' + TEXT_SHADOW_VERTICAL_POS.value + 'px ' + TEXT_SHADOW_BLUR_RADIUS.value + 'px ' + 'rgba(' + TEXT_SHADOW_COLOR_DISPLAY.value + ', ' + TEXT_SHADOW_OPACITY.value+')';
    showTextShadow();
}

function generateColorTextShadow(evt) {
    TEXT_SHADOW_COLOR_DISPLAY.value = TEXT_SHADOW_COLOR_PICKER.value;
    let color = evt.target.value;
    let red = parseInt(color.substr(1,2), 16);
    let green = parseInt(color.substr(3,2), 16);
    let blue = parseInt(color.substr(5, 2), 16);
    TEXT_SHADOW_COLOR_DISPLAY.value = `${red}, ${green}, ${blue}`;
    generateTextShadow();
}

