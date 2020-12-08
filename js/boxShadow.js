//Box shadow
const HORIZONTAL_POS = document.getElementById('horizontal-position');
const VERTICAL_POS = document.getElementById('vertical-position');
const BLUR_RADIUS = document.getElementById('blur-radius');
const SPREAD_RADIUS = document.getElementById('spread-radius');
const SHADOW_OPACITY = document.getElementById('shadow-opacity');
const BOX_SHADOW_COLOR_PICKER = document.getElementById('box-shadow-color-picker');
const BOX_SHADOW_COLOR_DISPLAY = document.getElementById('box-shadow-color-display');
const BOX_SHADOW_INSET = document.getElementById('box-shadow-inset');

HORIZONTAL_POS.addEventListener('input', generateBoxShadow);
VERTICAL_POS.addEventListener('input', generateBoxShadow);
BLUR_RADIUS.addEventListener('input', generateBoxShadow);
SPREAD_RADIUS.addEventListener('input', generateBoxShadow);
SHADOW_OPACITY.addEventListener('input', generateBoxShadow);
BOX_SHADOW_COLOR_PICKER.addEventListener('change', generateColorBoxShadow);
BOX_SHADOW_INSET.addEventListener('change', isInset);

function showBoxShadow() {
    let cssCode = String(AREA.style.boxShadow);
    CODE.innerHTML = '-webkit-box-shadow: ' + cssCode + ';' + '<br>' +  '-moz-box-shadow: ' + cssCode + ';' + '<br>' + 'box-shadow: ' + cssCode + ';';
}

function generateBoxShadow() {
    if(!BOX_SHADOW_INSET.checked) {
        AREA.style.boxShadow = HORIZONTAL_POS.value + 'px ' + VERTICAL_POS.value + 'px ' + BLUR_RADIUS.value + 'px ' + SPREAD_RADIUS.value + 'px ' + 'rgba(' + BOX_SHADOW_COLOR_DISPLAY.value + ',' + SHADOW_OPACITY.value + ')';
    }else {
        AREA.style.boxShadow = HORIZONTAL_POS.value + 'px ' + VERTICAL_POS.value + 'px ' + BLUR_RADIUS.value + 'px ' + SPREAD_RADIUS.value + 'px ' + 'rgba(' + BOX_SHADOW_COLOR_DISPLAY.value + ',' + SHADOW_OPACITY.value + ')' + 'inset';
    }
        showBoxShadow();
}

function generateColorBoxShadow(evt) {
    BOX_SHADOW_COLOR_DISPLAY.value = BOX_SHADOW_COLOR_PICKER.value;
    let color = evt.target.value;
    let red = parseInt(color.substr(1,2), 16);
    let green = parseInt(color.substr(3,2), 16);
    let blue = parseInt(color.substr(5,2), 16);
    BOX_SHADOW_COLOR_DISPLAY.value = `${red}, ${green}, ${blue}`;
    generateBoxShadow();
}

function isInset() {
    generateBoxShadow()
}


