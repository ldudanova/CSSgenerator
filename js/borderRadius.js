//Angles
const TLR = document.getElementById('top-left-range');
const TRR = document.getElementById('top-right-range');
const BLR = document.getElementById('bottom-left-range');
const BRR = document.getElementById('bottom-right-range');
//Inputs
const TLI = document.getElementById('top-left-input');
const TRI = document.getElementById('top-right-input');
const BLI = document.getElementById('bottom-left-input');
const BRI = document.getElementById('bottom-right-input');

TLR.addEventListener('input', generateRadiusAndChangeInput);
TRR.addEventListener('input', generateRadiusAndChangeInput);
BLR.addEventListener('input', generateRadiusAndChangeInput);
BRR.addEventListener('input', generateRadiusAndChangeInput);

TLI.addEventListener('input', generateRadiusAndChangeRange);
TRI.addEventListener('input', generateRadiusAndChangeRange);
BLI.addEventListener('input', generateRadiusAndChangeRange);
BRI.addEventListener('input', generateRadiusAndChangeRange);


//Border radius
function showBorderRadius() {
    let cssCode = String(AREA.style.borderRadius);
    CODE.innerHTML = '-webkit-border-radius: ' + cssCode + ';' + '<br>' + 'border-radius: ' + cssCode + ';';
}

function generateRadiusAndChangeInput() {
    TLI.value = TLR.value;
    TRI.value = TRR.value;
    BLI.value = BLR.value;
    BRI.value = BRR.value;

    AREA.style.borderRadius = TLI.value+'px '+TRI.value+'px '+BRI.value+'px '+BLI.value+'px ';
    showCode()
}

function generateRadiusAndChangeRange(){
    TLR.value = TLI.value;
    TRR.value = TRI.value;
    BLR.value = BLI.value;
    BRR.value = BRI.value;

    AREA.style.borderRadius = TLR.value+'px '+TRR.value+'px '+BRR.value+'px '+BLR.value+'px ';
    showCode();
}
