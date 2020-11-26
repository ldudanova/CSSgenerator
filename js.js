const AREA = document.getElementsByClassName('js-area')[0];
const CODE_AREA = document.getElementById('border-radius-code');
const COPY_BTNS = document.getElementsByClassName('js-btn-copy');

let textArea = document.createElement('textarea');

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


function showCode() {
    let cssCode = String(AREA.style.borderRadius);
    CODE_AREA.innerHTML = '-webkit-border-radius: ' + cssCode + ';' + '<br>' + 'border-radius: ' + cssCode + ';';
}

function generateRadiusAndChangeInput() {
    TLI.value = TLR.value;
    TRI.value = TRR.value;
    BLI.value = BLR.value;
    BRI.value = BRR.value;

    AREA.style.borderRadius = TLI.value+'px '+TRI.value+'px '+BRI.value+'px '+BLI.value+'px ';
    showCode();
}

function generateRadiusAndChangeRange(){
    TLR.value = TLI.value;
    TRR.value = TRI.value;
    BLR.value = BLI.value;
    BRR.value = BRI.value;

    AREA.style.borderRadius = TLR.value+'px '+TRR.value+'px '+BRR.value+'px '+BLR.value+'px ';
    showCode();
}

for(let i = 0; i < COPY_BTNS.length; i++){
    let btn = COPY_BTNS[i];
    btn.addEventListener('click', copyCode);

    function copyCode(event) {
        let codeToBeCopied = document.getElementsByClassName('code-area')[0].innerText;
        textArea.textContent = codeToBeCopied;
        document.body.append(textArea);
        textArea.select();
        console.log(textArea);
        document.execCommand("copy");

        let messageCopiedCode = document.getElementById('copy-message');
        messageCopiedCode.classList.add('showed-mes');
        messageCopiedCode.classList.remove('hidden-mes');

        setTimeout(function () {
            messageCopiedCode.classList.remove('showed-mes');
            messageCopiedCode.classList.add('hidden-mes');
        }, 1000)
        event.preventDefault();
    }
}


