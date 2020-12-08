const AREA = document.getElementById('js-area');
const CODE_AREA = document.getElementById('code-area');
const CODE = document.getElementById('code');
const COPY_BTNS = document.getElementsByClassName('js-btn-copy');

for(let i = 0; i < COPY_BTNS.length; i++) {
    let btn = COPY_BTNS[i];
    btn.addEventListener('click', ()=>toCopyCode(CODE_AREA));
}

function toCopyCode(code_area) {
    //IE and Chrome
    if(document.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(code_area);
        range.select();
        document.execCommand("Copy");
    }
    else if(window.getSelection) {
        // other browsers
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(code_area);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("Copy");
    }

    let messageCopiedCode = document.getElementById('copy-message');
    messageCopiedCode.classList.add('showed-mes');
    messageCopiedCode.classList.remove('hidden-mes');

    setTimeout(function () {
        messageCopiedCode.classList.remove('showed-mes');
        messageCopiedCode.classList.add('hidden-mes');
    }, 1000)
    event.preventDefault();
}